import TextInputWithTitle from "@/components/TextInputWithTitle";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import addNewRecipeApi from "@/api/recipe/addNewRecipe";
import ImageSelector from "@/components/ImageSelector";
import IngredientSelector from "@/components/IngredientSelector";
import PrimaryButton from "@/components/PrimaryButton";
import StepSelector from "@/components/StepSelector";
import { useNewRecipe } from "@/store/new-recipe.store";
import { uploadToFirebaseStorage } from "@/utils/uploadToFirebaseStorage";
import { useMutation } from "@tanstack/react-query";
import { ImagePickerAsset } from "expo-image-picker";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function Modal() {
	const { title, description, timeToCook, ingredients, steps, update, reset } =
		useNewRecipe();

	const [images, setImages] = useState<ImagePickerAsset[]>([]);

	const { mutate } = useMutation({
		mutationFn: addNewRecipeApi,
		onSuccess(data, variables, context) {
			reset();
			router.push("/");
		},
		onError(error, variables, context) {
			console.log({ error });
		},
	});

	useEffect(() => {
		reset();
	}, []);

	async function addRecipe() {
		mutate({
			title,
			description,
			timeToCook,
			images: (
				await Promise.all(
					images.map(
						async (image) => await uploadToFirebaseStorage(image.uri)
					)
				)
			).map((url) => ({ url })),
			ingredients,
			steps: await Promise.all(
				steps.map(async (step) => ({
					...step,
					images: (
						await Promise.all(
							step.images.map(
								async (image) =>
									await uploadToFirebaseStorage(image.url)
							)
						)
					).map((url) => ({ url })),
				}))
			),
		});
	}

	return (
		<SafeAreaView
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
			}}
		>
			<ScrollView style={{ paddingHorizontal: 16 }}>
				<Text
					style={{
						fontWeight: "600",
						fontSize: 20,
						marginBottom: 60,
						marginTop: 20,
					}}
				>
					Create new recipe
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 50,
						paddingBottom: 50,
					}}
				>
					<TextInputWithTitle
						title="Name"
						value={title}
						onChangeText={(value) => {
							update({ title: value });
						}}
					/>
					<TextInputWithTitle
						title="Description"
						value={description}
						onChangeText={(value) => {
							update({ description: value });
						}}
					/>
					<TextInputWithTitle
						title="Time to cook"
						type={"number-pad"}
						value={timeToCook}
						onChangeText={(value) => {
							update({ timeToCook: value });
						}}
					/>
					<ImageSelector
						title="Images"
						onChange={(images) => setImages(images)}
					/>
					<IngredientSelector />
					<StepSelector />
					<PrimaryButton onPress={addRecipe}>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Add new recipe
						</Text>
					</PrimaryButton>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import OwnRecipe from "@/components/OwnRecipe";
import PrimaryButton from "@/components/PrimaryButton";
import SelectedRecipe from "@/components/SelectedRecipe";
import TextInputWithTitle from "@/components/TextInputWithTitle";
import { Recipe } from "@/types/Recipe";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import addNewCookbookApi from "@/api/cookbook/addNewCookbook";
import { router } from "expo-router";

export default function Modal() {
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>("");
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	const { mutate } = useMutation({
		mutationFn: addNewCookbookApi,
		onSuccess(data, variables, context) {
			console.log({ cookbook: data });
			router.push("/");
		},
		onError(error, variables, context) {
			console.log({ error });
		},
	});

	async function addCookbook() {
		if (!name) Alert.alert("Cookbook name must not be empty");
		else if (!recipes.length)
			Alert.alert("Cookbook must have at least 1 recipe");
		else
			mutate({
				name,
				description,
				recipes: recipes.map((recipe) => recipe.id),
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
					Create new cookbook
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
						value={name}
						onChangeText={setName}
					/>
					<TextInputWithTitle
						title="Description"
						value={description}
						onChangeText={setDescription}
					/>
					<SelectedRecipe
						selected={recipes}
						onSelect={(recipe) => {
							setRecipes((prev) =>
								prev.filter((r) => r.id != recipe.id)
							);
						}}
					/>
					<OwnRecipe
						selected={recipes}
						onSelect={(recipe) => {
							setRecipes((prev) => [...prev, recipe]);
						}}
					/>
					<PrimaryButton onPress={addCookbook}>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Add new cookbook
						</Text>
					</PrimaryButton>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

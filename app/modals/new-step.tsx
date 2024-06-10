import ImageSelector from "@/components/ImageSelector";
import PrimaryButton from "@/components/PrimaryButton";
import TextInputWithTitle from "@/components/TextInputWithTitle";
import { useNewRecipe } from "@/store/new-recipe.store";
import { uploadToFirebaseStorage } from "@/utils/uploadToFirebaseStorage";
import { ImagePickerAsset } from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
	const { steps, update } = useNewRecipe();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [images, setImages] = useState<ImagePickerAsset[]>([]);

	return (
		<SafeAreaView
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
				paddingHorizontal: 16,
			}}
		>
			<ScrollView>
				<View style={{ display: "flex", flexDirection: "column", gap: 50 }}>
					<TextInputWithTitle
						title="Title of the step"
						value={title}
						onChangeText={setTitle}
					/>
					<TextInputWithTitle
						title="Content"
						value={content}
						onChangeText={setContent}
					/>
					<ImageSelector
						title="Images"
						onChange={(newImages) => setImages(newImages)}
					/>
					<PrimaryButton
						onPress={async () => {
							router.back();
							update({
								steps: [
									...steps,
									{
										order: steps.length,
										title,
										content,
										images: images.map((image) => ({
											url: image.uri,
										})),
									},
								],
							});
						}}
					>
						<Text style={{ fontWeight: "500", color: "white" }}>
							Accept
						</Text>
					</PrimaryButton>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

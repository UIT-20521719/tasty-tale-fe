import PrimaryButton from "@/components/PrimaryButton";
import TextInputWithTitle from "@/components/TextInputWithTitle";
import { useNewRecipe } from "@/store/new-recipe.store";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
	const { ingredients, update } = useNewRecipe();

	const [quantity, setQuantity] = useState("");
	const [ingredient, setIngredient] = useState("");

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
						title="Quantity"
						value={quantity}
						onChangeText={setQuantity}
					/>
					<TextInputWithTitle
						title="Ingredient"
						value={ingredient}
						onChangeText={setIngredient}
					/>
					<PrimaryButton
						onPress={() => {
							router.back();
							update({
								ingredients: [
									...ingredients,
									{ quantity, item: ingredient },
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

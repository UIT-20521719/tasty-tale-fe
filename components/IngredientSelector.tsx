import { useNewRecipe } from "@/store/new-recipe.store";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import SecondaryButton from "./SecondaryButton";

export default function IngredientSelector() {
	const { ingredients, update } = useNewRecipe();

	return (
		<View>
			<Text style={{ fontWeight: "500", marginBottom: 16 }}>Ingrediens</Text>
			<FlatList
				scrollEnabled={false}
				style={{ marginBottom: 20 }}
				data={ingredients}
				contentContainerStyle={{
					display: "flex",
					flexDirection: "column",
					gap: 8,
				}}
				renderItem={({ item }) => (
					<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
						<Text style={{ fontWeight: "600", fontSize: 16 }}>
							{item.quantity}
						</Text>
						<Text style={{ fontWeight: "400", fontSize: 16 }}>
							{item.item}
						</Text>
					</View>
				)}
			/>
			<SecondaryButton
				text={"Add new ingredient"}
				onPress={() => {
					router.push("/modals/new-ingredient");
				}}
			></SecondaryButton>
		</View>
	);
}

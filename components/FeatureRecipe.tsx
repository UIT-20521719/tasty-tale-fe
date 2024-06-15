import viewRandomRecipe from "@/api/recipe/viewRandom";
import { Recipe } from "@/types/Recipe";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import RecipeLargeCard from "./RecipeLargeCard";

export default function FeatureRecipe() {
	const { data } = useQuery<Recipe[]>({
		queryKey: ["feature-recipes", 3],
		queryFn: viewRandomRecipe,
	});

	return (
		<View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
			<Text style={{ fontWeight: "600", fontSize: 20 }}>Feature recipe</Text>
			<Text style={{ color: "#636773", fontWeight: "500", fontSize: 18 }}>
				Get lots of recipe inspiration from the community
			</Text>
			<View>
				<FlatList
					scrollEnabled={false}
					data={data || []}
					renderItem={({ item }) => <RecipeLargeCard recipe={item} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

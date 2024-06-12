import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import PrimaryButton from "@/components/PrimaryButton";
import SearchInput from "@/components/SearchInput";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import searchRecipe from "@/api/recipe/search";
import { useState } from "react";
import { Recipe } from "@/types/Recipe";
import RecipeLargeCard from "@/components/RecipeLargeCard";

export default function TabTwoScreen() {
	const [keyword, setKeyword] = useState("");
	const [searchKeyword, setSearchKeyword] = useState("");

	const { data } = useQuery<Recipe[]>({
		queryKey: ["recipes", searchKeyword],
		queryFn: searchRecipe,
		enabled: !!searchKeyword,
	});

	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<ScrollView
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "white",
					paddingHorizontal: 16,
				}}
			>
				<View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<SearchInput
						placeholder="Recipe Title, Ingredient"
						value={keyword}
						onChangeText={setKeyword}
					/>
					<PrimaryButton onPress={() => setSearchKeyword(keyword)}>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Search
						</Text>
					</PrimaryButton>
				</View>

				<Text style={{ fontWeight: "600", fontSize: 20, marginTop: 20 }}>
					Result
				</Text>
				{data ? (
					<FlatList
						scrollEnabled={false}
						data={data}
						renderItem={({ item }) => <RecipeLargeCard recipe={item} />}
						keyExtractor={(item) => item.id}
					/>
				) : null}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
	titleContainer: {
		flexDirection: "row",
		gap: 8,
	},
});

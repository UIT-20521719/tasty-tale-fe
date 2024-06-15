import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View,
} from "react-native";

import PrimaryButton from "@/components/PrimaryButton";
import SearchInput from "@/components/SearchInput";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import searchRecipe from "@/api/recipe/search";
import { useState } from "react";
import { Recipe } from "@/types/Recipe";
import RecipeLargeCard from "@/components/RecipeLargeCard";
import { useRecentSearch } from "@/store/recent-search.store";
import HeaderTitle from "@/components/HeaderTitle";
import { router } from "expo-router";

export default function TabTwoScreen() {
	const [keyword, setKeyword] = useState("");
	const [searchKeyword, setSearchKeyword] = useState("");

	const { keywords, addKeyword } = useRecentSearch();

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
					<PrimaryButton
						onPress={() => {
							setSearchKeyword(keyword);
							addKeyword(keyword);
							router.push(`/modals/search-result?keyword=${keyword}`);
						}}
					>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Search
						</Text>
					</PrimaryButton>
				</View>
				<View style={{ marginTop: 20 }}>
					<HeaderTitle>Recent search</HeaderTitle>
					<FlatList
						style={{ marginTop: 16 }}
						data={keywords}
						contentContainerStyle={{
							display: "flex",
							flexDirection: "column",
							gap: 8,
						}}
						renderItem={({ item }) => (
							<TouchableNativeFeedback
								style={{
									borderRadius: 8,
								}}
							>
								<View
									style={{
										paddingHorizontal: 8,
										paddingVertical: 4,
										borderRadius: 8,
										borderWidth: 0.5,
										borderColor: "black",
									}}
								>
									<Text style={{ fontSize: 18, fontWeight: "400" }}>
										{item}
									</Text>
								</View>
							</TouchableNativeFeedback>
						)}
						keyExtractor={(item) => item}
					/>
				</View>
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

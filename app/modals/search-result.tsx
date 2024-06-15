import searchRecipe from "@/api/recipe/search";
import RecipeLargeCard from "@/components/RecipeLargeCard";
import { Recipe } from "@/types/Recipe";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
	const navigation = useNavigation();
	const params = useLocalSearchParams();

	const { keyword } = params;

	const { data } = useQuery<Recipe[]>({
		queryKey: ["recipes", keyword],
		queryFn: searchRecipe,
		enabled: !!keyword,
	});

	useEffect(() => {
		navigation.setOptions({ title: `Search result for "${keyword}"` });
	}, []);

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
		</SafeAreaView>
	);
}

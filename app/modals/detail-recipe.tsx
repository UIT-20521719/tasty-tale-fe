import viewDetailRecipe from "@/api/recipe/viewDetail";
import FirebaseImage from "@/components/FirebaseImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PrimaryButton from "@/components/PrimaryButton";
import { Recipe } from "@/types/Recipe";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
	const params = useLocalSearchParams();
	const recipeId = params.id;

	const { data, isLoading } = useQuery<Recipe>({
		queryKey: ["detail-recipe", recipeId],
		queryFn: viewDetailRecipe,
	});
	console.log({ data, isLoading });

	return (
		<SafeAreaView
			style={{
				backgroundColor: "white",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			{data ? (
				<View>
					<ParallaxScrollView
						headerImage={
							data.images?.[0] ? (
								<FirebaseImage
									style={{ width: "100%", height: 400 }}
									id={data.images?.[0].url}
								/>
							) : (
								<View style={{ width: "100%", height: 400 }} />
							)
						}
						headerBackgroundColor={{
							dark: "",
							light: "",
						}}
					>
						<Text style={{ color: "black" }}>Hello</Text>
					</ParallaxScrollView>
				</View>
			) : null}
		</SafeAreaView>
	);
}

import { StyleSheet, ScrollView } from "react-native";

import viewDetailRecipe from "@/api/recipe/viewDetail";
import { useQuery } from "@tanstack/react-query";
import UserProfile from "@/components/UserProfile";
import { Recipe } from "@/types/Recipe";
import HeaderTitle from "@/components/HeaderTitle";
import { useMount } from "@/hooks/common/useMount";
import { useAuth } from "@/store/auth.store";
import { useEffect } from "react";
import { router } from "expo-router";

export default function HomeScreen() {
	const isMount = useMount();
	const { isLogin, displayname, photoUrl } = useAuth();

	// const { data, isLoading, error } = useQuery<Recipe>({
	// 	queryKey: ["recipe", "4bd5d173-7e4e-4e35-9e02-0518114b8aff"],
	// 	queryFn: viewDetailRecipe,
	// });
	// console.log({ data, isLoading, error });

	useEffect(() => {
		if (!isLogin && isMount) {
			router.replace("/modals/login");
		}
	}, [isMount]);

	return (
		<ScrollView
			style={{
				backgroundColor: "white",
				paddingTop: 40,
				paddingHorizontal: 16,
			}}
		>
			<UserProfile user={{ displayname, photoUrl }} />
			<HeaderTitle style={{ marginTop: 24 }}>Cookbooks</HeaderTitle>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});

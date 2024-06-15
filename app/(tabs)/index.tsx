import { ScrollView, StyleSheet, View } from "react-native";

import FeatureRecipe from "@/components/FeatureRecipe";
import RecommendCookbook from "@/components/RecommendCookbook";
import UserProfile from "@/components/UserProfile";
import { useMount } from "@/hooks/common/useMount";
import { useAuth } from "@/store/auth.store";
import { router } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
	const isMount = useMount();
	const { isLogin, displayname, photoUrl, accessToken } = useAuth();

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
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 16,
					paddingBottom: 40,
				}}
			>
				<UserProfile user={{ displayname, photoUrl }} />
				<RecommendCookbook />
				<FeatureRecipe />
			</View>
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

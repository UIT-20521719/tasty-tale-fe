import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import HeaderTitle from "@/components/HeaderTitle";
import UserProfile from "@/components/UserProfile";
import { useMount } from "@/hooks/common/useMount";
import { useAuth } from "@/store/auth.store";
import { router } from "expo-router";
import { useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import RecommendCookbook from "@/components/RecommendCookbook";

export default function HomeScreen() {
	const isMount = useMount();
	const { isLogin, displayname, photoUrl } = useAuth();

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
			<RecommendCookbook style={{ marginTop: 16 }} />
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

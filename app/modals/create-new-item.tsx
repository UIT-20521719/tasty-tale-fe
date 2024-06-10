import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
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
			<View style={{ paddingHorizontal: 16 }}>
				<Text
					style={{
						marginBottom: 60,
						fontWeight: "600",
						textAlign: "center",
						fontSize: 20,
					}}
				>
					What do you want to add?
				</Text>
				<View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
					<PrimaryButton
						onPress={() => {
							router.push("/modals/new-recipe");
						}}
					>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Create new recipe
						</Text>
					</PrimaryButton>
					<PrimaryButton onPress={() => {}}>
						<Text style={{ color: "white", fontWeight: "600" }}>
							Create new cookbook
						</Text>
					</PrimaryButton>
				</View>
			</View>
		</SafeAreaView>
	);
}

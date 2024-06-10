import signInApi from "@/api/auth/sigin";
import PrimaryButton from "@/components/PrimaryButton";
import { useGoogleSignin } from "@/hooks/google/useGoogleSignin";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
	const { signIn } = useGoogleSignin();

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					width: "100%",
					height: 300,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<Text style={{ fontWeight: "600", fontSize: 24 }}>Tasty tale</Text>

				<PrimaryButton
					onPress={() => {
						signIn();
					}}
				>
					<Text style={{ fontWeight: "500" }}>Sign in with Google</Text>
				</PrimaryButton>
			</View>
		</View>
	);
}

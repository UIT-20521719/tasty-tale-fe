import React from "react";
import { View } from "react-native";

export default function Page() {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
			}}
		>
			<View
				style={{
					width: "100%",
					height: 300,
					display: "flex",
					alignItems: "center",
				}}
			></View>
		</View>
	);
}

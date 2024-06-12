import { ReactNode } from "react";
import { TouchableNativeFeedback, View, Text } from "react-native";

type Props = {
	onPress?: () => any;
	children?: ReactNode;
	text?: string;
};

export default function SecondaryButton({ children, text, onPress }: Props) {
	return (
		<View
			style={{
				borderRadius: 16,
				overflow: "hidden",
			}}
		>
			<TouchableNativeFeedback onPress={onPress}>
				<View
					style={{
						paddingVertical: 12,
						paddingHorizontal: 20,
						display: "flex",
						alignItems: "center",
						borderColor: "#FF8527",
						borderWidth: 2,
						borderRadius: 16,
					}}
				>
					{children ?? children}
					{text ? (
						<Text style={{ color: "#FF8527", fontWeight: "500" }}>
							{text}
						</Text>
					) : null}
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}

import { ReactNode } from "react";
import { TouchableNativeFeedback, View } from "react-native";

type Props = {
	children: ReactNode;
};

export default function PrimaryButton({ children }: Props) {
	return (
		<TouchableNativeFeedback>
			<View
				style={{
					paddingVertical: 12,
					paddingHorizontal: 20,
					display: "flex",
					alignItems: "center",
					backgroundColor: "#FF8527",
				}}
			>
				{children}
			</View>
		</TouchableNativeFeedback>
	);
}

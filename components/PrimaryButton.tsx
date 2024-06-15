import { ReactNode } from "react";
import { TouchableNativeFeedback, View } from "react-native";

type Props = {
	onPress?: () => any;
	children: ReactNode;
} & React.ComponentPropsWithoutRef<typeof View>;

export default function PrimaryButton({ children, onPress }: Props) {
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
						backgroundColor: "#FF8527",
					}}
				>
					{children}
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}

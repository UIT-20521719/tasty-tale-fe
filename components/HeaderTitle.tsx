import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
	children: ReactNode;
} & React.ComponentPropsWithoutRef<typeof View>;

export default function HeaderTitle({ children, style }: Props) {
	return (
		<View style={style}>
			<Text style={{ fontWeight: "600", fontSize: 20 }}>{children}</Text>
		</View>
	);
}

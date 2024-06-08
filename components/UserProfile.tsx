import { User } from "@/types/User";
import { Image, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
	user: User;
};

export default function UserProfile({ user }: Props) {
	return (
		<View
			style={{
				marginTop: 20,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: 20,
			}}
		>
			<View
				style={{
					width: 50,
					height: 50,
					backgroundColor: "#ddd",
					borderRadius: 50,
				}}
			>
				{user.photoUrl ? (
					<Image src={user.photoUrl} style={{ width: 50, height: 50 }} />
				) : null}
			</View>
			<View
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
				}}
			>
				<Text style={{ fontWeight: "600", fontSize: 20 }}>
					{`Hi, ${user.displayname}`}
				</Text>
				<View
					style={{
						marginTop: 8,
						display: "flex",
						flexDirection: "row",
						gap: 20,
					}}
				>
					<Text
						style={{ color: "#636773", fontWeight: "500", fontSize: 14 }}
					>
						What are you cooking today?
					</Text>
				</View>
			</View>
		</View>
	);
}

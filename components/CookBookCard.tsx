import { Cookbook } from "@/types/Cookbook";
import { Text, TouchableNativeFeedback, View } from "react-native";
import FirebaseImage from "./FirebaseImage";

type Props = {
	cookbook: Cookbook;
};

export default function CookBookCard({ cookbook }: Props) {
	const imageUrl = cookbook.recipes
		.find((recipe) => recipe.images?.length)
		?.images.at(0)?.url;

	return (
		<View style={{ borderRadius: 12, overflow: "hidden" }}>
			<TouchableNativeFeedback>
				<View style={{}}>
					<View
						style={{
							borderRadius: 16,
							height: 200,
							backgroundColor: "#ddd",
							overflow: "hidden",
						}}
					>
						{imageUrl ? (
							<FirebaseImage
								style={{ width: "100%", height: 200 }}
								id={imageUrl}
							/>
						) : null}
					</View>
					<View
						style={{
							position: "relative",
							top: -70,
							display: "flex",
						}}
					>
						<View
							style={{
								backgroundColor: "white",
								marginHorizontal: 30,
								paddingTop: 24,
								paddingHorizontal: 12,
								borderRadius: 16,
								display: "flex",
								flexDirection: "column",
								gap: 12,
								alignItems: "center",
							}}
						>
							<Text style={{ fontWeight: "800", fontSize: 20 }}>
								{cookbook.name}
							</Text>
							<Text
								style={{
									fontWeight: "500",
									fontSize: 18,
									color: "#636773",
									textAlign: "center",
								}}
							>
								{cookbook.description}
							</Text>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}

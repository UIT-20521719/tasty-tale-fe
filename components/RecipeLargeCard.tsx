import { Recipe } from "@/types/Recipe";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import FirebaseImage from "./FirebaseImage";

type Props = {
	recipe: Recipe;
};

export default function RecipeLargeCard({ recipe }: Props) {
	return (
		<View style={{ borderRadius: 16, overflow: "hidden" }}>
			<TouchableNativeFeedback
				style={{ borderRadius: 16, overflow: "hidden" }}
			>
				<View
					style={{
						marginVertical: 8,
						backgroundColor: "white",
						borderRadius: 12,
						overflow: "hidden",
						padding: 16,
					}}
				>
					<View
						style={{
							borderRadius: 16,
							width: "100%",
							height: 200,
							backgroundColor: "#ddd",
							overflow: "hidden",
						}}
					>
						{recipe?.images?.length > 0 ? (
							<FirebaseImage
								id={recipe.images[0].url}
								style={{ width: "100%", height: 200 }}
							/>
						) : null}
					</View>
					<View style={{ marginTop: 16 }}>
						<Text
							style={{ marginLeft: 8, fontWeight: "700", fontSize: 20 }}
						>
							{recipe.title}
						</Text>
					</View>
					<View
						style={{
							marginTop: 12,
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
								overflow: "hidden",
							}}
						>
							{recipe.user?.photoUrl ? (
								<Image
									src={recipe.user.photoUrl}
									style={{ width: 50, height: 50 }}
								/>
							) : null}
						</View>
						<View
							style={{
								display: "flex",
								justifyContent: "space-between",
								flexDirection: "column",
								gap: 8,
							}}
						>
							<Text style={{ fontWeight: "600", fontSize: 16 }}>
								{recipe.user?.displayname}
							</Text>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									gap: 20,
								}}
							>
								<View style={{ display: "flex", flexDirection: "row" }}>
									<Text>{`${recipe.likes} Likes`}</Text>
								</View>
								<View style={{ display: "flex", flexDirection: "row" }}>
									<Text>{`${recipe.reviewNum} Reviews`}</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
}

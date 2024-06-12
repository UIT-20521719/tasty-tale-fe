import { useNewRecipe } from "@/store/new-recipe.store";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import HorizontalImage from "./HorizontalImage";
import SecondaryButton from "./SecondaryButton";

export default function StepSelector() {
	const { steps, update } = useNewRecipe();

	return (
		<View>
			<Text style={{ fontWeight: "500", marginBottom: 16 }}>Steps</Text>
			<FlatList
				scrollEnabled={false}
				style={{ marginBottom: 20 }}
				data={steps}
				contentContainerStyle={{
					display: "flex",
					flexDirection: "column",
					gap: 8,
				}}
				renderItem={({ item }) => (
					<View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
						<View
							style={{
								marginTop: 4,
								width: 25,
								height: 25,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "black",
								borderRadius: 100,
							}}
						>
							<Text
								style={{
									fontWeight: "600",
									fontSize: 16,
									color: "white",
								}}
							>{`${item.order}`}</Text>
						</View>
						<View
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 8,
							}}
						>
							<Text style={{ fontWeight: "600", fontSize: 16 }}>
								{item.title}
							</Text>
							<Text style={{ fontWeight: "400", fontSize: 16 }}>
								{item.content}
							</Text>
							<View>
								<HorizontalImage
									images={item.images.map(({ url }) => url)}
								/>
							</View>
						</View>
					</View>
				)}
			/>
			<SecondaryButton
				onPress={() => {
					router.push("/modals/new-step");
				}}
				text={"Add new step"}
			></SecondaryButton>
		</View>
	);
}

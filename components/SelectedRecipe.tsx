import { Recipe } from "@/types/Recipe";
import { FlatList, Text, TouchableNativeFeedback, View } from "react-native";

type Props = {
	selected: Recipe[];
	onSelect?: (recipe: Recipe) => any;
};

export default function SelectedRecipe({ selected, onSelect }: Props) {
	return (
		<View>
			<Text style={{ fontWeight: "600", fontSize: 16 }}>
				Selected recipe
			</Text>
			<FlatList
				scrollEnabled={false}
				style={{ marginTop: 16 }}
				data={selected}
				renderItem={({ item }) => (
					<View style={{ borderRadius: 18, overflow: "hidden" }}>
						<TouchableNativeFeedback
							onPressOut={() => {
								onSelect?.(item);
							}}
						>
							<View
								style={{
									paddingHorizontal: 16,
									paddingVertical: 8,
									borderRadius: 8,
									borderWidth: 0.5,
									borderColor: "#636773",
									marginVertical: 8,
								}}
							>
								<Text style={{ fontWeight: "600" }}>{item.title}</Text>
								<Text
									style={{ fontWeight: "500", color: "#636773" }}
								>{`${item.likes} likes`}</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

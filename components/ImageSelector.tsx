import {
	ImagePickerAsset,
	launchImageLibraryAsync,
	MediaTypeOptions,
} from "expo-image-picker";
import { useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

type Props = {
	title: string;
	onChange?: (images: ImagePickerAsset[]) => any;
};

export default function ImageSelector({ title, onChange }: Props) {
	const [images, setImages] = useState<ImagePickerAsset[]>([]);

	const pickImage = async () => {
		let result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.All,
			allowsEditing: false,
			aspect: [1, 1],
			quality: 1,
			allowsMultipleSelection: true,
		});

		if (!result.canceled) {
			setImages(result.assets);
			onChange?.(result.assets);
		}
	};

	return (
		<View>
			<Text style={{ fontWeight: "500", marginBottom: 12 }}>{title}</Text>
			<ScrollView horizontal style={{ marginBottom: 10 }}>
				<FlatList
					data={images}
					contentContainerStyle={{
						display: "flex",
						flexDirection: "row",
						gap: 8,
					}}
					renderItem={({ item }) => (
						<Image
							style={{
								width: 100,
								height: 100,
								borderRadius: 8,
								overflow: "hidden",
							}}
							src={item.uri}
							width={100}
							height={100}
						/>
					)}
					keyExtractor={(item) => item.uri}
				/>
			</ScrollView>
			<PrimaryButton onPress={pickImage}>
				<Text style={{ fontWeight: "500", color: "white" }}>
					Select images
				</Text>
			</PrimaryButton>
		</View>
	);
}

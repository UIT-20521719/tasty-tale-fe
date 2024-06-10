import { FlatList, Image } from "react-native";

export default function HorizontalImage({ images }: { images: string[] }) {
	return (
		<FlatList
			data={images}
            horizontal
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
					src={item}
					width={100}
					height={100}
				/>
			)}
			keyExtractor={(item) => item}
		/>
	);
}

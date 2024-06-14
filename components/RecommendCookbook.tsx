import viewRandomCookbookApi from "@/api/cookbook/viewRandom";
import { Cookbook } from "@/types/Cookbook";
import { useQuery } from "@tanstack/react-query";
import { Dimensions, View, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CookBookCard from "./CookBookCard";

export default function RecommendCookbook({
	...props
}: React.ComponentPropsWithoutRef<typeof View>) {
	const { data } = useQuery<Cookbook[]>({
		queryKey: ["recommend-cookbooks"],
		queryFn: viewRandomCookbookApi,
	});

	const width = Dimensions.get("window").width;

	return (
		<View {...props}>
			<Carousel
				loop
				width={width - 32}
				height={500}
				autoPlay={false}
				autoPlayInterval={2000}
				data={data || []}
				scrollAnimationDuration={1000}
				renderItem={({ item }) => <CookBookCard cookbook={item} />}
			/>
		</View>
	);
}

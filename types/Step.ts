import { ImageEntity } from "./Image";

export type Step = {
	order: number;
	title: string;
	content: string;
	images: ImageEntity[];
};

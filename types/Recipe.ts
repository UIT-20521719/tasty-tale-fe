import { ImageEntity } from "./Image";
import { Ingredient } from "./Ingredient";
import { Step } from "./Step";
import { User } from "./User";

export type Recipe = {
	title: string;
	description: string;
	timeToCook: number;
	ingredients: Ingredient[];
	steps: Step[];
	likes: number;
	reviewNum: number;
	images: ImageEntity[];
	user: User;
};

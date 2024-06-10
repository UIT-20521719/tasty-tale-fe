import { ImageEntity } from "@/types/Image";
import { Ingredient } from "@/types/Ingredient";
import { Step } from "@/types/Step";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type INewRecipe = {
	title: string;
	description: string;
	timeToCook: number;
	ingredients: Ingredient[];
	steps: Step[];
	images: ImageEntity[];
	update: (newRecipe: Partial<INewRecipe>) => any;
	reset: () => any;
};

export const useNewRecipe = create<INewRecipe, [["zustand/immer", never]]>(
	immer<INewRecipe>((set, get) => ({
		title: "",
		description: "",
		timeToCook: 0,
		ingredients: [],
		steps: [],
		images: [],
		update(newRecipe) {
			set((state) => ({
				...state,
				...newRecipe,
			}));
		},
		reset() {
			set((state) => ({
				title: "",
				description: "",
				timeToCook: 0,
				ingredients: [],
				steps: [],
				images: [],
			}));
		},
	}))
);

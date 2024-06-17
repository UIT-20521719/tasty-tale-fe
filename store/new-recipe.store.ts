import { ImageEntity } from '@/types/Image';
import { Ingredient } from '@/types/Ingredient';
import { Review } from '@/types/Review';
import { Step } from '@/types/Step';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type INewRecipe = {
  title: string;
  description: string;
  timeToCook: number;
  ingredients: Ingredient[];
  steps: Step[];
  images: ImageEntity[];
  reviews: Review[];
  update: (newRecipe: Partial<INewRecipe>) => any;
  reset: () => any;
};

export const useNewRecipe = create<INewRecipe, [['zustand/immer', never]]>(
  immer<INewRecipe>((set, get) => ({
    title: '',
    description: '',
    timeToCook: 0,
    ingredients: [],
    steps: [],
    images: [],
    reviews: [],
    update(newRecipe) {
      set((state) => ({
        ...state,
        ...newRecipe,
      }));
    },
    reset() {
      set((state) => ({
        title: '',
        description: '',
        timeToCook: 0,
        ingredients: [],
        steps: [],
        images: [],
      }));
    },
  }))
);

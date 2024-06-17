import { ImageEntity } from './Image';
import { Ingredient } from './Ingredient';
import { Review } from './Review';
import { Step } from './Step';
import { User } from './User';

export type Recipe = {
  id: string;
  title: string;
  description: string;
  timeToCook: number;
  ingredients: Ingredient[];
  steps: Step[];
  likes: number;
  reviewNum: number;
  images: ImageEntity[];
  user: User;
  reviews: Review[];
};

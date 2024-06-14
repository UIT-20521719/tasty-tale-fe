import { Recipe } from "./Recipe";
import { User } from "./User";

export type CreateCookbookDto = {
	name: string;
	description: string;
	recipes: string[];
};

export type Cookbook = {
	name: string;
	description: string;
	user: User;
	recipes: Recipe[];
};

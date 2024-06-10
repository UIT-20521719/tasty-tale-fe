import { Recipe } from "@/types/Recipe";
import apiInstance from "../apiInstance";

export default async function addNewRecipeApi(
	recipe: Omit<Recipe, "user" | "likes" | "reviewNum">
) {
	const response = await apiInstance.post(`/v1/recipe`, recipe);

	return response.data;
}

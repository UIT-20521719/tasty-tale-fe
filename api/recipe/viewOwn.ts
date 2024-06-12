import apiInstance from "../apiInstance";

export default async function viewOwnRecipe({ queryKey }: { queryKey: any }) {
	const [_key] = queryKey;
	const response = await apiInstance.get(`/v1/recipe/own`);

	return response.data;
}

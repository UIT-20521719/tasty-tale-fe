import apiInstance from "../apiInstance";

export default async function searchRecipe({ queryKey }: { queryKey: any }) {
	const [_key, name] = queryKey;
	const response = await apiInstance.get(`/v1/recipe?name=${name}`);

	return response.data;
}

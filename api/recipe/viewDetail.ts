import apiInstance from "../apiInstance";

export default async function viewDetailRecipe({
	queryKey,
}: {
	queryKey: any;
}) {
	const [_key, id] = queryKey;
	const response = await apiInstance.get(`/v1/recipe/${id}`);

	return response.data;
}

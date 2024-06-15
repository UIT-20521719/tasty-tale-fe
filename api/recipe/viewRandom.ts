import apiInstance from "../apiInstance";

export default async function viewRandomRecipe({
	queryKey,
}: {
	queryKey: any;
}) {
	const [_key, quantity] = queryKey;
	const response = await apiInstance.get(
		`/v1/recipe/random?quantity=${quantity}`
	);

	return response.data;
}

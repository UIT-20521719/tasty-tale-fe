import apiInstance from "../apiInstance";

export default async function viewRandomCookbookApi({
	queryKey,
}: {
	queryKey: any;
}) {
	const [_key, quantity] = queryKey;
	const response = await apiInstance.get(`/v1/cookbook?quantity=${quantity}`);

	return response.data;
}

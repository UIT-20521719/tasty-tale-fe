import { CreateCookbookDto } from "@/types/Cookbook";
import apiInstance from "../apiInstance";

export default async function addNewCookbookApi(cookbook: CreateCookbookDto) {
	const response = await apiInstance.post(`/v1/cookbook`, cookbook);

	return response.data;
}

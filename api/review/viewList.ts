import { Recipe } from '@/types/Recipe';
import apiInstance from '../apiInstance';

export default async function viewListView() {
  const response = await apiInstance.get(`/v1/review`);

  return response.data;
}

import apiInstance from "../apiInstance";

export default async function signInApi({
	googleId,
	displayname,
	email,
	photoUrl,
}: {
	googleId: string;
	displayname: string;
	email: string;
	photoUrl: string;
}) {
	const response = await apiInstance.post(`/v1/auth/login`, {
		googleId,
		displayname,
		email,
		photoUrl,
	});

	return response.data;
}

import signInApi from "@/api/auth/sigin";
import { useAuth } from "@/store/auth.store";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useCallback } from "react";

export function useGoogleSignin() {
	const { isLogin, login } = useAuth();

	GoogleSignin.configure({
		webClientId:
			"48232012757-ugmi8q42bofbqarta3bf4gmnjruooam8.apps.googleusercontent.com",
	});

	const { mutate } = useMutation({
		mutationFn: signInApi,
		onMutate(variables) {},
		onSuccess(data, { googleId, displayname, email, photoUrl }, context) {
			login(displayname, email, googleId, photoUrl, data.access_token);
			router.push("/");
		},
	});

	const signIn = useCallback(
		async (
			callback?: (data: {
				user: User["user"];
				token: { idToken: string; accessToken: string };
			}) => any
		) => {
			try {
				await GoogleSignin.hasPlayServices();
				const userInfo = await GoogleSignin.signIn();
				const token = await GoogleSignin.getTokens();
				console.log({ userInfo, token });

				mutate({
					googleId: userInfo.user.id,
					displayname: userInfo.user.name || "",
					email: userInfo.user.email,
					photoUrl: userInfo.user.photo || "",
				});

				callback?.({ user: userInfo.user, token });

				return { token, user: userInfo };
			} catch (error) {
				console.log({ error });
			}
		},
		[]
	);

	return { signIn };
}

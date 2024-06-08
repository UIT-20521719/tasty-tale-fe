import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type IAuth = {
	displayname: string;
	email: string;
	googleId: string;
	isLogin: boolean;
	accessToken: string;
	login: (
		displayname: string,
		email: string,
		googleId: string,
		accessToken: string
	) => any;
	logout: () => any;
};

export const useAuth = create<
	IAuth,
	[["zustand/persist", never], ["zustand/immer", never]]
>(
	persist(
		immer<IAuth>((set, get) => ({
			isLogin: false,
			displayname: "",
			email: "",
			googleId: "",
			accessToken: "",
			login(displayname, email, googleId, accessToken) {
				set((state) => {
					state.displayname = displayname;
					state.email = email;
					state.googleId = googleId;
					state.accessToken = accessToken;
					state.isLogin = true;
				});
			},
			logout() {
				set((state) => {
					state.displayname = "";
					state.email = "";
					state.googleId = "";
					state.accessToken = "";
					state.isLogin = false;
				});
			},
		})),
		{
			name: "auth",
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);

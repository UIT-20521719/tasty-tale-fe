import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type IRecentSearch = {
	keywords: string[];
	addKeyword: (keyword: string) => any;
};

export const useRecentSearch = create<
	IRecentSearch,
	[["zustand/persist", never], ["zustand/immer", never]]
>(
	persist(
		immer<IRecentSearch>((set, get) => ({
			keywords: [],
			addKeyword(keyword) {
				set((state) => {
					state.keywords = state.keywords.filter((k) => k !== keyword);
					state.keywords.unshift(keyword);
				});
			},
		})),
		{
			name: "recent-search",
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);

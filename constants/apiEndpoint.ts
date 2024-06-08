import Constants from "expo-constants";

const API = {
	baseUrl: `http://${Constants?.expoConfig?.hostUri
		?.split(`:`)
		?.shift()
		?.concat(`:3000`)}`,
};

export default API;

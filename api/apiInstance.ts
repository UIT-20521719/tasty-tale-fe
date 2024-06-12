import axios from "axios";

import API from "@/constants/apiEndpoint";
import { useAuth } from "@/store/auth.store";

const apiInstance = axios.create({
	baseURL: API.baseUrl,
});

apiInstance.defaults.headers.common["Content-Type"] = "application/json";

const authenticationInterceptor = apiInstance.interceptors.request.use(
	(request) => {
		const accessToken = useAuth.getState().accessToken;
		console.log({ accessToken });
		if (accessToken && !request.headers.getAuthorization()) {
			request.headers.setAuthorization(`Bearer ${accessToken}`);
			request.withCredentials = true;
		}
		return request;
	}
);

apiInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.code == "ERR_NETWORK") return Promise.reject(error);
		const errMessage = error.response.data.errors as string[];
		if (errMessage.includes("Expired JWT") && !originalRequest._retry) {
			originalRequest._retry = true;
			// if (!originalRequest?.isRefresh) await refreshAccessTokenFn();
			originalRequest.isRefresh = true;
			return apiInstance(originalRequest);
		}
		return Promise.reject(error);
	}
);

export default apiInstance;

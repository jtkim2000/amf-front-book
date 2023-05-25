import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_SERVER,
	paramsSerializer: (params) => qs.stringify(params),
});

// export const setAuthHeader = str => {
//   console.log("setAuthHeader",str);
//   axiosInstance.defaults.headers.common.Authorization = str;
// };

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		// eslint-disable-next-line no-undef
		return Promise.reject(err);
	},
);

axiosInstance.interceptors.response.use(({data: response}) => {
	return response;
});
export default axiosInstance;

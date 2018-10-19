import axios from 'axios'

export default ({ Vue }) => {

  let axiosInstance = axios.create({
    baseURL: process.env.backendEndpoint,
    withCredentials: true
  })

  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, function (error) {
    return Promise.reject(error.response);
  })
  Vue.prototype.$axios = axiosInstance
}

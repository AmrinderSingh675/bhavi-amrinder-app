import axiosClient from "./axiosClient";


export const baseApiService = {
  get: (url, params) =>
    axiosClient.get(url, { params }).then((r) => r.data),

  post: (url, data) =>
    axiosClient.post(url, data).then((r) => r.data),

  put: (url, data) =>
    axiosClient.put(url, data).then((r) => r.data),

  delete: (url) =>
    axiosClient.delete(url).then((r) => r.data),
};
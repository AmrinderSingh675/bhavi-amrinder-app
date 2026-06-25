import axios from "axios";
import { environment } from "../../config/environment";

const axiosClient = axios.create({
  baseURL: environment.apiUrl,
});

export default axiosClient;
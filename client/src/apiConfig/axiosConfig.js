import axios from "axios";
import { baseUrl } from "../utils/constants";

const axiosConfig = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

export default axiosConfig;

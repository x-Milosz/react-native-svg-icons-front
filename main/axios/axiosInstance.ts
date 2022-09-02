import { serverAddress } from "./../../config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: serverAddress,
    timeout: 5000,
});

export default axiosInstance;

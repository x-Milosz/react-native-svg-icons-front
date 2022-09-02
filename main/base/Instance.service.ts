import { AxiosInstance } from "axios";
import axiosInstance from "../axios/axiosInstance";

export abstract class InstanceService {
    abstract get axios(): AxiosInstance;
}

export class DefaultInstanceService implements InstanceService {
    private _axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this._axios = axios;
    }

    public get axios(): AxiosInstance {
        return this._axios;
    }
}

export const defaultInstanceService = new DefaultInstanceService(axiosInstance);

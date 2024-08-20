import axios from "axios";
// import store from "@/app/store.js";
// import router from "@/plugins/router";
// import { HTTPCodes, impalaMode, serverStatus } from "../const/globals";

class ApiService {
    constructor() {
        this.adapter = axios.create({ baseURL: undefined, withCredentials: true });
        // this.adapter.interceptors.response.use(async response => {
        //     const currentStatus = store.state.serverStatus;
        //     if (currentStatus !== serverStatus.AVAILABLE) {
        //         store.dispatch("changeServerStatus", serverStatus.AVAILABLE);
        //     }
        //     return response;
        // });
    }

    hasServerURL() {
        return this.adapter.defaults.baseURL !== undefined;
    }
    getServerURL() {
        return this.adapter.defaults.baseURL;
    }
    changeBaseURL(newURL) {
        this.adapter.defaults.baseURL = newURL;
        console.debug("base server url set to: " + this.adapter.defaults.baseURL);
    }

    serializeQueryParams(params) {
        if (params === undefined || params === null || Object.keys(params).length === 0) {
            return "";
        }
        return (
            "?" +
            Object.keys(params)
                .filter(key => params[key] !== null && params[key] !== undefined)
                .map(key => {
                    const value = params[key];
                    if (Array.isArray(value)) {
                        // If the value is an array, repeat the key for each element
                        return value.map(element => `${key}=${encodeURIComponent(element)}`).join("&");
                    } else {
                        return `${key}=${encodeURIComponent(value)}`;
                    }
                })
                .join("&")
        );
    }

    async get(url, { headers = {}, params = {}, responseType = "json" } = {}, full = false) {
        try {
            const response = await this.adapter.get(`${url}${this.serializeQueryParams(params)}`, { headers, responseType });
            return full ? response : response.data;
        } catch (error) {
            await this.handleError(error);
        }
    }

    async post(url, data, { headers = {}, params = {}, responseType = "json" } = {}, full = false) {
        try {
            const response = await this.adapter.post(`${url}${this.serializeQueryParams(params)}`, data, { headers, responseType });
            return full ? response : response.data;
        } catch (error) {
            await this.handleError(error);
        }
    }
    async patch(url, data, { headers = {}, params = {}, responseType = "json" } = {}, full = false) {
        try {
            const response = await this.adapter.patch(url, data, { headers, params, responseType });
            return full ? response : response.data;
        } catch (error) {
            await this.handleError(error);
        }
    }
    async put(url, data, { headers = {}, params = {}, responseType = "json" } = {}, full = false) {
        try {
            const response = await this.adapter.put(`${url}${this.serializeQueryParams(params)}`, data, { headers, responseType });
            return full ? response : response.data;
        } catch (error) {
            await this.handleError(error);
        }
    }

    async delete(url, { headers = {}, params = {} } = {}, full = false) {
        try {
            const response = await this.adapter.delete(`${url}${this.serializeQueryParams(params)}`, { headers });
            return full ? response : response.data;
        } catch (error) {
            await this.handleError(error);
        }
    }

    async handleError(error) {
        error ? console.log(error,' inside handle error') : console.log('else statement')
        // if (error.response?.status) {
        //     // The request was made and the server responded with a status code
        //     // that falls out of the range of 2xx
        //     // redirect to login page if not loggedin
        //     if (error.response.status === HTTPCodes.UnAuthorized) {
        //         await store.dispatch("resetDefaultUser");
        //         if (store.state.impalaMode === impalaMode.SECURE) {
        //             await router.replace({ name: "Signin" });
        //         }
        //         throw new Error("User not signed in!");
        //         // await router.push({ name: "Signin" });
        //     } else if (error.response?.data?.mainMessage) {
        //         // handle other errors
        //         throw new Error(error.response.data.mainMessage);
        //     } else {
        //         throw error;
        //     }
        // } else {
        //     await store.dispatch("changeServerStatus", serverStatus.UNREACHABLE);
        //     // The request was made but no response was received
        //     throw new Error("3DS-Impala Server not available!");
        // }
    }
}

const api = new ApiService();
export { api };

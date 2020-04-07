import axios, { AxiosError, AxiosResponse } from 'axios'
import SessionService from "./session/SessionService"
import { successfulResponseHandler } from './utils'
import { BASE_URL } from './config';

const errorRequestHandler = async (error: AxiosError) => {
    const { response } = error;
    if (response) {
        if (response.status === 403 || 401) {
            SessionService._logout();
        }
        throw response.data;
    }
    throw error;
};

const restclient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

const baseOpts = { headers: {} }
export default abstract class BaseService {
    async getHeaders(opts = baseOpts) {
        const token = await SessionService.getToken();
        return { ...opts.headers, Authorization: `Bearer ${token}` };
    }

    async get(url, opts) {
        const headers = await this.getHeaders(opts)
        return restclient.get(url, { ...opts, headers: headers })
            .then(successfulResponseHandler)
            .catch(errorRequestHandler);
    }

    async post(url, data, opts = baseOpts) {
        const headers = await this.getHeaders(opts)

        return restclient
            .post(url, data, { ...opts, headers })
            .then(successfulResponseHandler)
            .catch(errorRequestHandler);
    }

    async put(url, data, opts = baseOpts) {
        const headers = await this.getHeaders(opts)
        return restclient
            .put(url, data, { ...opts, headers })
            .then(successfulResponseHandler)
            .catch(errorRequestHandler);
    }

    async delete(url, opts) {
        const headers = await this.getHeaders(opts)
        return restclient
            .delete(url, { ...opts, headers })
            .then(successfulResponseHandler)
            .catch(errorRequestHandler);
    }

}
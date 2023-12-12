import axios, {AxiosInstance} from "axios";

export interface HttpResponse {
    data: any
}

export interface ApiQuery {
    data: any
}

export interface Result<T> {
    status: Status,
    result: T
}

export enum Status {
    Success, Error
}

const parseError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            return `${error.response.status} | ${error.response.data}`
        } else if (error.request) {
            return error.request
        } else {
            return error.message
        }
    } else {
        return 'some thing wrong happened'
    }
}

export class HttpClient {
    private static instance: HttpClient;

    axios: AxiosInstance

    private static getInstance(): HttpClient {
        if (!HttpClient.instance)
            HttpClient.instance = new HttpClient()
        return HttpClient.instance;
    }

    private constructor() {
        this.axios = axios.create({
            baseURL: process.env.BASE_URL
        })
    }

    static get = async (endpoint: string): Promise<HttpResponse> => {
        try {
            return await this.getInstance().axios.get(endpoint)
        } catch (error: unknown) {
            return {data: error}
        }
    }

    static post = async (endpoint: string, payload: ApiQuery): Promise<HttpResponse> => {
        try {
            return await this.getInstance().axios.post(endpoint, payload.data)
        } catch (error: unknown) {
            return {data: error}
        }
    }
}

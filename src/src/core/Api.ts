import axios, {type AxiosInstance} from "axios";
import Settings from "@/core/Settings";


export interface ApiServiceProps{
    baseURL: string,
    timeout: number
}

export class ApiServiceError extends Error{
    public readonly url: string;

    public readonly statusCode: number;

    public readonly data: any | undefined;

    public readonly error: Error | undefined;

    constructor(
        url: string, 
        statusCode: number, 
        data?: any, 
        error?: Error
    ){
        const message: string = `Falha na requisição ${url}.\nStatus: ${statusCode}\nData: ${JSON.stringify(data)}\nError: ${error}`;

        super(message);

        this.url = url;

        this.statusCode = statusCode;

        this.data = data;

        this.error = error;
    }
}

class ApiService{
    private readonly api: AxiosInstance;

    constructor({
        baseURL = Settings.API_BASE_URL,
        timeout = Settings.API_TIMEOUT
    }: Partial<ApiServiceProps> = {}){
        this.api = axios.create({
            baseURL,
            timeout
        });
    }

    public async makeRequest<T>(
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        url: string,
        payload: any,
        params: Record<string, string>,
        ...config: any
    ): Promise<T>{
        try{
            const { status, data } = await this.api.request({
                method,
                url,
                data: payload,
                params,
                ...config
            });

            if(status >= 400)
                throw new ApiServiceError(
                    url,
                    status,
                    data
                );

            return data;

        }catch(error){
            if(error instanceof Error && error !instanceof ApiServiceError)
                throw new ApiServiceError(
                    url,
                    0,
                    undefined,
                    error
                );

            throw error
        }
    }

    get<T>(url: string, params: Record<string, string> = {}, ...config: any): Promise<T>{
        return this.makeRequest("GET", url, undefined, params, ...config);
    }

    post<T>(url: string, payload: any, params: Record<string, string> = {}, ...config: any): Promise<T>{
        return this.makeRequest("POST", url, payload, params, ...config);
    }

    put<T>(url: string, payload: any, params: Record<string, string> = {}, ...config: any): Promise<T>{
        return this.makeRequest("PUT", url, payload, params, ...config);
    }

    patch<T>(url: string, payload: any, params: Record<string, string> = {}, ...config: any): Promise<T>{
        return this.makeRequest("PATCH", url, payload, params, ...config);
    }

    delete<T>(url: string, params: Record<string, string> = {}, ...config: any): Promise<T>{
        return this.makeRequest("DELETE", url, undefined, params, ...config);
    }

    getAxiosInstance(): AxiosInstance{
        return this.api;
    }
}

export default new ApiService();
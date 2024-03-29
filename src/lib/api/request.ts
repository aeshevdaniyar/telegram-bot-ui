import axios, { AxiosInstance } from "axios";
export type RequestMethod = "DELETE" | "POST" | "GET" | "PUT" | "PATCH";
export interface Config {
  baseUrl: string;
  customHeaders?: Record<string, any>;
}
export default class Client {
  private axiosClient: AxiosInstance;
  private config: Config;
  constructor(config: Config) {
    this.axiosClient = this.createClient(config);
    this.config = { ...config };
  }
  createClient(config: Config) {
    const client = axios.create({
      baseURL: config.baseUrl,
    });

    return client;
  }

  setHeaders(customHeaders?: Record<string, any>) {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return Object.assign({}, defaultHeaders, customHeaders);
  }

  async request(
    method: RequestMethod,
    path: string,
    payload: Record<string, any> = {},
    customHeaders: Record<string, any> = {}
  ): Promise<any> {
    customHeaders = { ...this.config.customHeaders, ...customHeaders };

    const reqOpts = {
      method,
      url: path,
      json: true,
      headers: this.setHeaders(customHeaders),
    };

    if (["POST", "DELETE", "PATCH"].includes(method)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      reqOpts["data"] = payload;
    }

    const { data, ...response } = await this.axiosClient(reqOpts);

    return { data, response };
  }
}

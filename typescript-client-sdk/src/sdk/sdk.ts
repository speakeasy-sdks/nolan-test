import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export const ServerList = [
	"http://petstore.swagger.io/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.2.1";
  private _genVersion = "1.4.8";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
  }
  
  /**
   * addPet - Creates a new pet in the store. Duplicates are allowed
  **/
  addPet(
    req: operations.AddPetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddPetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    let retryConfig = req.retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffConfig(500, 60000, 1.5, 3600000);
    } 
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "post",
        headers: headers,
        data: reqBody, 
        ...config,
      });
    }, new utils.Retries(retryConfig, [
      "5XX"
    ]));
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddPetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pet = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  /**
   * deletePet - deletes a single pet based on the ID supplied
  **/
  deletePet(
    req: operations.DeletePetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pets/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    let retryConfig = req.retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffConfig(500, 60000, 1.5, 3600000);
    } 
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      });
    }, new utils.Retries(retryConfig, [
      "5XX"
    ]));
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  /**
   * findPets - Returns all pets from the system that the user has access to
   * 
  **/
  findPets(
    req: operations.FindPetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindPetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindPetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    let retryConfig = req.retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffConfig(500, 60000, 1.5, 3600000);
    } 
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      });
    }, new utils.Retries(retryConfig, [
      "5XX"
    ]));
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FindPetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pets = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  /**
   * findpet - Returns a user based on a single ID, if the user does not have access to the pet
  **/
  findpet(
    req: operations.FindpetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindpetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindpetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pets/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    let retryConfig = req.retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffConfig(500, 60000, 1.5, 3600000);
    } 
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      });
    }, new utils.Retries(retryConfig, [
      "5XX"
    ]));
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FindpetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pet = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
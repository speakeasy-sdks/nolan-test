
import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

SERVERS = [
	"http://petstore.swagger.io/api",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.3.1"
    _gen_version: str = "1.5.3"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    def add_pet(self, request: operations.AddPetRequest) -> operations.AddPetResponse:
        r"""Creates a new pet in the store. Duplicates are allowed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        headers["user-agent"] = f"speakeasy-sdk/{self._language} {self._sdk_version} {self._gen_version}"
        
        client = self._client
        
        retry_config = request.retries
        if retry_config is None:
            retry_config = utils.RetryConfig("backoff", True)
            retry_config.backoff = utils.BackoffStrategy(500, 60000, 1.5, 3600000)
            

        def do_request():
            return client.request("POST", url, data=data, files=form, headers=headers)
        
        r = utils.retry(do_request, utils.Retries(retry_config, [
            "5XX"
        ]))
        content_type = r.headers.get("Content-Type")

        res = operations.AddPetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Pet])
                res.pet = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    def delete_pet(self, request: operations.DeletePetRequest) -> operations.DeletePetResponse:
        r"""deletes a single pet based on the ID supplied
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pets/{id}", request.path_params)
        
        headers = {}
        headers["user-agent"] = f"speakeasy-sdk/{self._language} {self._sdk_version} {self._gen_version}"
        
        client = self._client
        
        retry_config = request.retries
        if retry_config is None:
            retry_config = utils.RetryConfig("backoff", True)
            retry_config.backoff = utils.BackoffStrategy(500, 60000, 1.5, 3600000)
            

        def do_request():
            return client.request("DELETE", url, headers=headers)
        
        r = utils.retry(do_request, utils.Retries(retry_config, [
            "5XX"
        ]))
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    def find_pets(self, request: operations.FindPetsRequest) -> operations.FindPetsResponse:
        r"""Returns all pets from the system that the user has access to
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pets"
        
        headers = {}
        query_params = utils.get_query_params(request.query_params)
        headers["user-agent"] = f"speakeasy-sdk/{self._language} {self._sdk_version} {self._gen_version}"
        
        client = self._client
        
        retry_config = request.retries
        if retry_config is None:
            retry_config = utils.RetryConfig("backoff", True)
            retry_config.backoff = utils.BackoffStrategy(500, 60000, 1.5, 3600000)
            

        def do_request():
            return client.request("GET", url, params=query_params, headers=headers)
        
        r = utils.retry(do_request, utils.Retries(retry_config, [
            "5XX"
        ]))
        content_type = r.headers.get("Content-Type")

        res = operations.FindPetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Pet]])
                res.pets = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    def findpet(self, request: operations.FindpetRequest) -> operations.FindpetResponse:
        r"""Returns a user based on a single ID, if the user does not have access to the pet
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pets/{id}", request.path_params)
        
        headers = {}
        headers["user-agent"] = f"speakeasy-sdk/{self._language} {self._sdk_version} {self._gen_version}"
        
        client = self._client
        
        retry_config = request.retries
        if retry_config is None:
            retry_config = utils.RetryConfig("backoff", True)
            retry_config.backoff = utils.BackoffStrategy(500, 60000, 1.5, 3600000)
            

        def do_request():
            return client.request("GET", url, headers=headers)
        
        r = utils.retry(do_request, utils.Retries(retry_config, [
            "5XX"
        ]))
        content_type = r.headers.get("Content-Type")

        res = operations.FindpetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Pet])
                res.pet = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
import dataclasses
from ..shared import error as shared_error
from ..shared import pet as shared_pet
from ..utils import retryconfig as utils_retryconfig
from typing import Optional


@dataclasses.dataclass
class FindPetsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindPetsRequest:
    query_params: FindPetsQueryParams = dataclasses.field()
    retries: Optional[utils.RetryConfig] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FindPetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    pets: Optional[list[shared_pet.Pet]] = dataclasses.field(default=None)
    
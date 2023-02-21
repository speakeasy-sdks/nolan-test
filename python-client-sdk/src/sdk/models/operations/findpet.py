import dataclasses
from ..shared import error as shared_error
from ..shared import pet as shared_pet
from ..utils import retryconfig as utils_retryconfig
from typing import Optional


@dataclasses.dataclass
class FindpetPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindpetRequest:
    path_params: FindpetPathParams = dataclasses.field()
    retries: Optional[utils.RetryConfig] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FindpetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    pet: Optional[shared_pet.Pet] = dataclasses.field(default=None)
    
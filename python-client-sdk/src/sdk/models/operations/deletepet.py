import dataclasses
from ..shared import error as shared_error
from ..utils import retryconfig as utils_retryconfig
from typing import Optional


@dataclasses.dataclass
class DeletePetPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePetRequest:
    path_params: DeletePetPathParams = dataclasses.field()
    retries: Optional[utils.RetryConfig] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeletePetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
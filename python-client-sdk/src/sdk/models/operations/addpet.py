from __future__ import annotations
import dataclasses
from ..shared import error as shared_error
from ..shared import newpet as shared_newpet
from ..shared import pet as shared_pet
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class AddPetRequest:
    request: shared_newpet.NewPet = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    retries: Optional[utils.RetryConfig] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddPetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    pet: Optional[shared_pet.Pet] = dataclasses.field(default=None)
    
import dataclasses
from ..shared import newpet as shared_newpet
from typing import Optional


@dataclasses.dataclass
class NewPetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

@dataclasses.dataclass
class NewPetRequest:
    request: Optional[shared_newpet.NewPet] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
   
req = operations.AddPetRequest(
    request=shared.NewPet(
        name="unde",
        tag="deserunt",
    ),
)
    
res = s.add_pet(req)

if res.pet is not None:
    # handle response
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "";
import { AddPetRequest, AddPetResponse } from "/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddPetRequest = {
  request: {
    name: "unde",
    tag: "deserunt",
  },
};

sdk.addPet(req).then((res: AddPetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->
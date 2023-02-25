<!-- Start SDK Example Usage -->
```typescript
import {
  AddPetRequest,
  AddPetResponse 
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";


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
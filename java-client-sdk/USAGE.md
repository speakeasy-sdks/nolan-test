<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AddPetRequest req = new AddPetRequest() {{
                request = new NewPet() {{
                    name = "unde";
                    tag = "deserunt";
                }};
            }};

            AddPetResponse res = sdk.addPet(req);

            if (res.pet.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "github.com/speakeasy-sdks/nolan-test"
    "github.com/speakeasy-sdks/nolan-test/pkg/models/shared"
    "github.com/speakeasy-sdks/nolan-test/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AddPetRequest{
        Request: shared.NewPet{
            Name: "unde",
            Tag: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AddPet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Pet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
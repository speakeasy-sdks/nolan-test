package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AddPetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.NewPet request;
    public AddPetRequest withRequest(org.openapis.openapi.models.shared.NewPet request) {
        this.request = request;
        return this;
    }
    
    public org.openapis.openapi.models.utils.RetryConfig retries;
    public AddPetRequest withRetries(org.openapis.openapi.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

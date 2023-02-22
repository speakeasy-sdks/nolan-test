package org.openapis.openapi.models.webhooks;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class NewPetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.NewPet request;
    public NewPetRequest withRequest(org.openapis.openapi.models.shared.NewPet request) {
        this.request = request;
        return this;
    }
    
}

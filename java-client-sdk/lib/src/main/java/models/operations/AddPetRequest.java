package .models.operations;

import .utils.SpeakeasyMetadata;

public class AddPetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.NewPet request;
    public AddPetRequest withRequest(.models.shared.NewPet request) {
        this.request = request;
        return this;
    }
    
    public .models.utils.RetryConfig retries;
    public AddPetRequest withRetries(.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

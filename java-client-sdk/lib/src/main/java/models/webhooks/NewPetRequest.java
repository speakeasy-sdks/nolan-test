package .models.webhooks;

import .utils.SpeakeasyMetadata;

public class NewPetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public .models.shared.NewPet request;
    public NewPetRequest withRequest(.models.shared.NewPet request) {
        this.request = request;
        return this;
    }
    
}

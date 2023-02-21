package .models.operations;

import .utils.SpeakeasyMetadata;

public class DeletePetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeletePetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    
}

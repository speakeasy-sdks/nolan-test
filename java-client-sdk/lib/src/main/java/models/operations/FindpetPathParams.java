package .models.operations;

import .utils.SpeakeasyMetadata;

public class FindpetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public FindpetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    
}

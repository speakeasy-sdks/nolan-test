package .models.operations;

import .utils.SpeakeasyMetadata;

public class FindPetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public FindPetsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public FindPetsQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    
}

package .models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NewPet {
    @JsonProperty("name")
    public String name;
    public NewPet withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public NewPet withTag(String tag) {
        this.tag = tag;
        return this;
    }
    
}

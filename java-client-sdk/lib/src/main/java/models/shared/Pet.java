package .models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Pet {
    @JsonProperty("id")
    public Long id;
    public Pet withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("name")
    public String name;
    public Pet withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public Pet withTag(String tag) {
        this.tag = tag;
        return this;
    }
    
}

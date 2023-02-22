package org.openapis.openapi.models.operations;



public class FindPetsResponse {
    public String contentType;
    public FindPetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public org.openapis.openapi.models.shared.Error error;
    public FindPetsResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public org.openapis.openapi.models.shared.Pet[] pets;
    public FindPetsResponse withPets(org.openapis.openapi.models.shared.Pet[] pets) {
        this.pets = pets;
        return this;
    }
    
    public Integer statusCode;
    public FindPetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

package org.openapis.openapi.models.operations;



public class AddPetResponse {
    public String contentType;
    public AddPetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public org.openapis.openapi.models.shared.Error error;
    public AddPetResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public org.openapis.openapi.models.shared.Pet pet;
    public AddPetResponse withPet(org.openapis.openapi.models.shared.Pet pet) {
        this.pet = pet;
        return this;
    }
    
    public Integer statusCode;
    public AddPetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

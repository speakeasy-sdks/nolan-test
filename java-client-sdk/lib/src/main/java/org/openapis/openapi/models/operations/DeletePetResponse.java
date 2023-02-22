package org.openapis.openapi.models.operations;



public class DeletePetResponse {
    public String contentType;
    public DeletePetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public org.openapis.openapi.models.shared.Error error;
    public DeletePetResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public Integer statusCode;
    public DeletePetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

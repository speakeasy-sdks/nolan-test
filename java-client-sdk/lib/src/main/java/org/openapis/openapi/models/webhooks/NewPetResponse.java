package org.openapis.openapi.models.webhooks;



public class NewPetResponse {
    public String contentType;
    public NewPetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public Integer statusCode;
    public NewPetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

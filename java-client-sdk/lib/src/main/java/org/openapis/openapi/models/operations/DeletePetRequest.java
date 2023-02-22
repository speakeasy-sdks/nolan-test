package org.openapis.openapi.models.operations;



public class DeletePetRequest {
    public DeletePetPathParams pathParams;
    public DeletePetRequest withPathParams(DeletePetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    
    public org.openapis.openapi.models.utils.RetryConfig retries;
    public DeletePetRequest withRetries(org.openapis.openapi.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

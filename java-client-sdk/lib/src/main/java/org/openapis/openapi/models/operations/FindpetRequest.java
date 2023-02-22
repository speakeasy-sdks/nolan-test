package org.openapis.openapi.models.operations;



public class FindpetRequest {
    public FindpetPathParams pathParams;
    public FindpetRequest withPathParams(FindpetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    
    public org.openapis.openapi.models.utils.RetryConfig retries;
    public FindpetRequest withRetries(org.openapis.openapi.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

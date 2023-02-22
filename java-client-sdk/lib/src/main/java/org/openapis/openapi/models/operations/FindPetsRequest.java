package org.openapis.openapi.models.operations;



public class FindPetsRequest {
    public FindPetsQueryParams queryParams;
    public FindPetsRequest withQueryParams(FindPetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    
    public org.openapis.openapi.models.utils.RetryConfig retries;
    public FindPetsRequest withRetries(org.openapis.openapi.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

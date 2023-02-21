package .models.operations;



public class FindPetsRequest {
    public FindPetsQueryParams queryParams;
    public FindPetsRequest withQueryParams(FindPetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    
    public .models.utils.RetryConfig retries;
    public FindPetsRequest withRetries(.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

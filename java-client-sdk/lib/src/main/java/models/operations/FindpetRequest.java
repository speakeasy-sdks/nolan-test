package .models.operations;



public class FindpetRequest {
    public FindpetPathParams pathParams;
    public FindpetRequest withPathParams(FindpetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    
    public .models.utils.RetryConfig retries;
    public FindpetRequest withRetries(.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

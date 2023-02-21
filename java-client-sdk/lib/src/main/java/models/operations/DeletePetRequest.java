package .models.operations;



public class DeletePetRequest {
    public DeletePetPathParams pathParams;
    public DeletePetRequest withPathParams(DeletePetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    
    public .models.utils.RetryConfig retries;
    public DeletePetRequest withRetries(.models.utils.RetryConfig retries) {
        this.retries = retries;
        return this;
    }
    
}

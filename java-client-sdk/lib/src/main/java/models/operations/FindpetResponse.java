package .models.operations;



public class FindpetResponse {
    public String contentType;
    public FindpetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public .models.shared.Error error;
    public FindpetResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public .models.shared.Pet pet;
    public FindpetResponse withPet(.models.shared.Pet pet) {
        this.pet = pet;
        return this;
    }
    
    public Integer statusCode;
    public FindpetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

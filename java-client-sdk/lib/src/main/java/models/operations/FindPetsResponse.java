package .models.operations;



public class FindPetsResponse {
    public String contentType;
    public FindPetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public .models.shared.Error error;
    public FindPetsResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public .models.shared.Pet[] pets;
    public FindPetsResponse withPets(.models.shared.Pet[] pets) {
        this.pets = pets;
        return this;
    }
    
    public Integer statusCode;
    public FindPetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

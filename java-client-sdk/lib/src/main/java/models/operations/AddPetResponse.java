package .models.operations;



public class AddPetResponse {
    public String contentType;
    public AddPetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    public .models.shared.Error error;
    public AddPetResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    public .models.shared.Pet pet;
    public AddPetResponse withPet(.models.shared.Pet pet) {
        this.pet = pet;
        return this;
    }
    
    public Integer statusCode;
    public AddPetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}

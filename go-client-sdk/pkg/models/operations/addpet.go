package operations

import (
	"github.com/speakeasy-sdks/nolan-test/pkg/models/shared"
	"github.com/speakeasy-sdks/nolan-test/pkg/models/utils"
)

type AddPetRequest struct {
	Request shared.NewPet `request:"mediaType=application/json"`
	Retries *utils.RetryConfig
}

type AddPetResponse struct {
	ContentType string
	Error       *shared.Error
	Pet         *shared.Pet
	StatusCode  int
}

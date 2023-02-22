package operations

import (
	"github.com/speakeasy-sdks/nolan-test/pkg/models/shared"
	"github.com/speakeasy-sdks/nolan-test/pkg/utils"
)

type FindpetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type FindpetRequest struct {
	PathParams FindpetPathParams
	Retries    *utils.RetryConfig
}

type FindpetResponse struct {
	ContentType string
	Error       *shared.Error
	Pet         *shared.Pet
	StatusCode  int
}

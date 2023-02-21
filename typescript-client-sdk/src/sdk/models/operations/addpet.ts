import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import * as utils from "../utils";


export class AddPetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NewPet;

  @SpeakeasyMetadata()
  retries?: RetryConfig;
}

export class AddPetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  pet?: shared.Pet;

  @SpeakeasyMetadata()
  statusCode: number;
}
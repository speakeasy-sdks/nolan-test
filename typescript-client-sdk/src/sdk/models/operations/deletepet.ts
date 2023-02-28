import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import * as utils from "../utils";
import { Type } from "class-transformer";


export class DeletePetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class DeletePetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePetPathParams;

  @SpeakeasyMetadata()
  retries?: utils.RetryConfig;
}

export class DeletePetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
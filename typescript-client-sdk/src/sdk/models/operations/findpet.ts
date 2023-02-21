import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import * as utils from "../utils";


export class FindpetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class FindpetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindpetPathParams;

  @SpeakeasyMetadata()
  retries?: RetryConfig;
}

export class FindpetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  pet?: shared.Pet;

  @SpeakeasyMetadata()
  statusCode: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import * as utils from "../utils";
import { Type } from "class-transformer";


export class FindPetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}

export class FindPetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindPetsQueryParams;

  @SpeakeasyMetadata()
  retries?: utils.RetryConfig;
}

export class FindPetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata({ elemType: shared.Pet })
  pets?: shared.Pet[];

  @SpeakeasyMetadata()
  statusCode: number;
}
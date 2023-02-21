import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Pet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
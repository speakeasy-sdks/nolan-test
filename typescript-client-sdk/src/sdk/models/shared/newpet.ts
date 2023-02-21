import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class NewPet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
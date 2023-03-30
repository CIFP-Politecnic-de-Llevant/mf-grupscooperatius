import {GrupCooperatiu} from "src/model/GrupCooperatiu";
import {Item} from "src/model/Item";

export interface ItemGrupCooperatiu {
  percentatge: number;
  grupCooperatiu?: GrupCooperatiu;
  item: Item;
}

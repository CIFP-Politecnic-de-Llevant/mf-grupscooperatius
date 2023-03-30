import {Usuari} from "src/model/Usuari";
import {ValorItem} from "src/model/ValorItem";
import {ItemGrupCooperatiu} from "src/model/ItemGrupCooperatiu";

export interface Item {
  id?: number;
  nom: string;
  usuari?: Usuari;
  valorsItem?: Array<ValorItem>;
  valorsMapped?: Array<{label:string;value:string}>;
  itemsGrupCooperatiu?: Array<ItemGrupCooperatiu>;
}

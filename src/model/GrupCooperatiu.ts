import {ItemGrupCooperatiu} from "src/model/ItemGrupCooperatiu";
import {Agrupament} from "src/model/Agrupament";
import {Membre} from "src/model/Membre";

export interface GrupCooperatiu {
  id?: number;
  nom: string;
  itemsGrupCooperatiu: Array<ItemGrupCooperatiu>;
  agrupaments: Array<Agrupament>;
  membres: Array<Membre>;
}

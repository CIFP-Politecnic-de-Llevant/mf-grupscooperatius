import {GrupCooperatiu} from "src/model/GrupCooperatiu";
import {Membre} from "src/model/Membre";

export interface Agrupament {
  id?: number;
  grupCooperatiu: GrupCooperatiu;
  membres: Array<Membre>;
  numero: number;
}

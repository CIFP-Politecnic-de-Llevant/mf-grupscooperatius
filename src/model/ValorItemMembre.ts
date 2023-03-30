import {ValorItem} from "src/model/ValorItem";
import {Membre} from "src/model/Membre";

export interface ValorItemMembre {
  id?: number;
  membre?: Membre;
  valorItem: ValorItem;
}

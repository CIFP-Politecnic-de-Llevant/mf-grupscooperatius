import {Item} from "src/model/Item";

export interface ValorItem{
  id?: number;
  valor: string;
  pes: number;
  //valorsItemMembre?: Array<ValorItemMembre>;
  item?: Item;
}

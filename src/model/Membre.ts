import {Agrupament} from "src/model/Agrupament";
import {ValorItemMembre} from "src/model/ValorItemMembre";

export interface Membre {
  nom: string;
  agrupamentFixe?: number;
  agrupament?: Agrupament;
  valorsItemMembre: Array<ValorItemMembre>;
  valorsItemMapped: Array<{label:string;value:string;}>;
  amics: Array<string>;
  enemics: Array<string>;
  label?: string;
  value?: string;
}

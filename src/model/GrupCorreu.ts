import {Usuari} from "src/model/Usuari";
import {Grup} from "src/model/Grup";

export interface GrupCorreu {
  id: number;
  email: string;
  nom: string;
  descripcio: string;
  tipus: string;
  usuaris?: Array<Usuari>;
  grupCorreus?: Array<GrupCorreu>;
  grups?: Array<Grup>;
  label?: string;
  value?: string;
}

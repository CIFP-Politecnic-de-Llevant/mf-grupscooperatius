import {Grup} from "src/model/Grup";

export interface Curs {
  id: number;
  nom: string;
  unitatOrganitzativa: string;
  grups?: Grup[];
}

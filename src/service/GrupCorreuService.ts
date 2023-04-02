import {axios} from "boot/axios";
import {GrupCorreu} from "src/model/GrupCorreu";
import {UsuariService} from "src/service/UsuariService";
import {Usuari} from "src/model/Usuari";

export class GrupCorreuService {
  static async findAll(): Promise<Array<GrupCorreu>> {
    const responseGroups = await axios.get(process.env.API + '/api/core/grupcorreu/llistat');
    const dataGroups = await responseGroups.data;
    return dataGroups.map((grupCorreu: any): GrupCorreu => {
      return this.fromJSON(grupCorreu);
    });
  }

  static async getGrupAmbUsuaris(grup:GrupCorreu): Promise<GrupCorreu> {
      const response = await axios.get(process.env.API + '/api/core/grupcorreu/grupambusuaris/'+grup.email);
      const grupCorreu = await response.data;
      return this.fromJSON(grupCorreu);
  }

  static fromJSON(json:any):GrupCorreu{
    let usuaris:Usuari[]|undefined  = undefined;

    if(json.usuaris){
      usuaris = json.usuaris.map((u:any)=>UsuariService.fromJSON(u));
    } else if(json.usuarisGrupCorreu){
      usuaris = json.usuarisGrupCorreu.map((u:any)=>UsuariService.fromJSON(u.usuari));
    }

    return {
      id: json.idgrup,
      email: json.gsuiteEmail,
      nom: json.gsuiteNom,
      descripcio: json.gsuiteDescripcio,
      tipus: json.grupCorreuTipus,
      usuaris: usuaris,
      label: json.gsuiteNom,
      value: json.idgrup
    }
  }
}

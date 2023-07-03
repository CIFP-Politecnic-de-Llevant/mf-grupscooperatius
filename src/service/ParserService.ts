import {axios}  from 'boot/axios'

export class ParserService {

  static async uploadFileParser(formData:FormData)  {
    const response = await axios.post(
      process.env.API + "/api/grupscooperatius/parser",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      }
    );
  }
}

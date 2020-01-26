import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas: any[]=[];
  urlSpotify:string = 'https://api.spotify.com/v1';
  token="BQDZYoi-7RHZm3lKIF0CJhldABQ0MXbCgrauubcu9DvTBzUdJenrhQu0Zpoj1LApTx3LkV8uq7JT4wscgOk";
  
  constructor(public http: HttpClient) { 
    console.log("Servicio listo")
  }

  getArtistas(termino: string){
    console.log(termino)
    let url= `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;
    let headers =new HttpHeaders({
      "authorization": "Bearer BQAyNpF8_l819HbcnEilv9mntyYNtBsP0Fsc-DhEGqTqEm1NCj2yUQYs6Wf0KZEHFe8pE_iWSsIzCDFFxS8"
    })
    return this.http.get(url, {headers})
    .pipe(map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    }));
  }

  getArtista(id: string){
    let url= `${this.urlSpotify}/artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, {headers})
    // .pipe(map((resp: any) => {
    //   this.artistas = resp.artists.items;
    //   return this.artistas;
    // }));

  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      "authorization": "Bearer" +this.token
    })
    return headers;
  }

  getTop(id:string){
    let url=`${this.urlSpotify}/artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers});
  }
}

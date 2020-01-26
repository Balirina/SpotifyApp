import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
}) 
export class SearchComponent implements OnInit {
termino: string="";

  constructor(private _spotifyService: SpotifyService) { 
  }

  buscarArtista(){
    if(this.termino.length == 0){
      return;
    }
    this._spotifyService.getArtistas(this.termino)
    .subscribe(artistas =>{
      console.log(artistas);
      this._spotifyService.artistas=artistas;
    });
  }

  
  ngOnInit() {
  }

}

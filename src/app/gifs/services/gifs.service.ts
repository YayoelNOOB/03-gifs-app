import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) //El providedIn nos permite que el servicio esté disponible en todo el proyecto.
export class GifsService {
  private _tagsHistory: string[] = []; //Se hace privado para no exponer nuestro historial

  private apiKey: string = 'bBJeXWSFUPFz9ZrWNraL1sWV8zZqdEda';
  //api.giphy.com/v1/gifs/search?api_key=bBJeXWSFUPFz9ZrWNraL1sWV8zZqdEda&q=Valorant&limit=10
  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizedHistory(tag: string){
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag ); //Junto con el if, evitamos que se dupliquen búsquedas ya hechas
    this._tagsHistory = this._tagsHistory.splice(0,10); //Así se limita a ssolo 10 elementos en pantalla

  }

  searchTag( tag: string ): void{
    if ( tag.length === 0) return;
    this.organizedHistory(tag);


    console.log(this.tagsHistory);
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."

      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `,
})

// txtTagInput: Esto es para obtener el dato que estamos poniendo en la barra de búsqueda al presionar enter
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService) { }

  // SearchTag (newTag: string){
  searchTag (){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }


}

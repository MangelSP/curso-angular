import { Component, OnInit } from '@angular/core';
import { Characters } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  listCharacters: Characters[] = [
    {
      name:'Goku',
      power: 15000
    },
    {
      name:'Vegeta',
      power: 1500
    },
    {
      name:'Krillin',
      power: 15000
    },
  ]
  nuevo: Characters = {
    name: '',
    power: 0
  }

  agregarNuevoPersonaje( argumento: Characters ){
    this.listCharacters.push( argumento );
  }
}

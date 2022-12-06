import { Component } from "@angular/core";


@Component({
  selector:'app-contador',
  template:`
    <h1>Hola este es el contador</h1>
    <button (click)="acumular(base)">+ {{base}}</button>
    <p>
    <span>{{numero}}</span>
    </p>

    <button (click)="acumular(-base)">- {{base}}</button>
    `
})

export class ContadorComponent {

  base: number = 5;
  numero:number = 0;

  acumular(value:number){
   this.numero += value;
  }


}

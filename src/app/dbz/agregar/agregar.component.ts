import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { Characters } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: Characters = {
    name: '',
    power: 0
  };

  @Output() onNuevoPersonaje:EventEmitter<Characters> = new EventEmitter<Characters>()

  agregar(){
    if(this.nuevo.name.trim().length === 0 ) {return;}
    this.onNuevoPersonaje.emit( this.nuevo )
    this.nuevo = {
      name: '',
      power: 0
    }
  }
}

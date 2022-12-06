import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations:[
    ListadoComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule {}

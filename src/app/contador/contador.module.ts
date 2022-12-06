import { ContadorComponent } from './contador/contador.componet';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports:[
    CommonModule
  ]
})

export class ContadorModule {}

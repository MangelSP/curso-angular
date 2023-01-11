import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  @Input() data: Characters[] =[]

}

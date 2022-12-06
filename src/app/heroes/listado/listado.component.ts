import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes:string[] = ["SpiderMan",'Iron Man','Hulk']
  heroeBorrado: string ="";
  exists: boolean = true;
  constructor() { }
  ngOnInit(): void {
  }


  borrarHeroe () {
    const deleteHeroe = this.heroes.shift() || '';
    this.heroeBorrado = deleteHeroe;
    console.log(this.heroeBorrado)
    if (this.heroeBorrado ===  ''){
      this.exists = false;

    }
  }


}

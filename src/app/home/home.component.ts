import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lista:string[] = ["juan", "maycol", "pedro", "casandra", "camila", "vanesa"];
  lista02:string[] = ["carlos"];
  vista:boolean = true;
  constructor() { }

  cambio(){
    this.vista != this.vista;
    console.log(this.vista);
  }



  ngOnInit(): void {
  }

}

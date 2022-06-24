import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lista:string[] = ["juan", "maycol", "pedro", "casandra", "camila", "vanesa"];
  lista02:string[] = ["carlos"];
  vista01:boolean = true;
  vista02:boolean = true;
  vista03:boolean = true;
  constructor() { }

  cambio01(vista01:boolean){
    
    this.vista01 = false;
  }

  cambio02(vista02:boolean){
    
    this.vista02 = false;
  }

  cambio03(vista03:boolean){
    
    this.vista03 = false;
  }



  ngOnInit(): void {
  }

}

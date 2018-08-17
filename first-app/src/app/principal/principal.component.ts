import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

 ocultar = true;
 heroes = ['Superman', 'Batman', 'Spiderman', 'Wonder Woman'];
  constructor() { }

  ngOnInit() {
  }

}

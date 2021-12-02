import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage  {

  constructor( private router:Router) { }

  GoToBack(){
    this.router.navigate(['./menu/home'], { skipLocationChange: true });
  }

}

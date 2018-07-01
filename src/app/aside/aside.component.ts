import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {


  menu: any[];

  constructor() {
    this.menu = [];

   }

  ngOnInit() {

    this.menu = [
      'link 1',
      'link 2',
      'link 3',
      'link 4',
      'link 5',
      'link 6',
      'link 7',
      'link 8'
    ]

  }

}

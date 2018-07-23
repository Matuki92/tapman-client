import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: any;

  constructor() { }

  ngOnInit() {
    this.beers = [
      {name: 'Test 1'},
      {name: 'Test 2'},
      {name: 'Test 3'}
    ]
  }

}

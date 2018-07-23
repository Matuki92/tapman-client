import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  @Input() beer: Object = {};

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  restaurants: [any];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.get()
      .then(data => {
        this.restaurants = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ownBeers: any;
  beers: any;

  restaurantName: String;

  formStatus = false;

  newBeer = {}

  constructor(
    private restaurantService: RestaurantService,
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.restaurantName = params.name;
      this.restaurantService.listOwnBeers(params.name)
        .then(result => {
          this.ownBeers = result.beers;

          return this.beerService.getBeers()
            .then(beers => {
              this.beers = beers;
            })
        })
        .catch(err => {console.log(err)})
    });
  }

  activateBeer(beer) {
    const data = {
      restaurantName: this.restaurantName,
      beerId: beer._id
    }
    this.restaurantService.pushBeer(data)
      .then(() => {
        this.restaurantService.listOwnBeers(this.restaurantName)
          .then( result => {
            this.ownBeers = result.beers;
          })
          .catch(err => {console.log(err)})}
      )
      .catch(err => {console.log(err)});
  }

  toggleForm() {
    this.formStatus = !this.formStatus;
  }

  submitForm(form) {
    this.beerService.add(this.newBeer)
      .then((result) => {
        console.log(result);
        this.newBeer = {};
      })
      .catch();
  }
}

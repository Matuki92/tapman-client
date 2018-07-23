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

  newBeer = {
    new: true
  }

  constructor(
    private restaurantService: RestaurantService,
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateRestaurant()
    this.updateBeers()
  }

  updateRestaurant() {
    this.activatedRoute.params.subscribe(params => {
      this.restaurantName = params.name;
      this.restaurantService.listOwnBeers(params.name)
        .then(result => {
          this.ownBeers = result.beers;
        })
        .catch(err => {console.log(err)})
    });
    this.resetNewBeer();
  }

  resetNewBeer() {
    this.newBeer = {
      new: true
    }
  }

  updateBeers() {
    this.beerService.getBeers()
      .then(beers => {
        this.beers = beers;
      })
      .catch(err => {console.log(err)})
  }

  toggleBeer(beer, action) {

    const data = {
      restaurantName: this.restaurantName,
      beerId: beer._id
    };

    if (action === 'add') {
      this.restaurantService.pushBeer(data)
        .then(() => {
          this.updateRestaurant()
        })
        .catch(err => {console.log(err)});

    } else if (action === 'remove') {
      this.restaurantService.removeBeer(data)
        .then(() => {
          this.updateRestaurant();
        })
        .catch(err => {console.log(err)});
    }
  }

  editBeer(beer) {
    this.newBeer = beer;
  }

  deleteBeer(beer) {
    this.beerService.delete(beer._id)
      .then(() => {
        this.updateBeers();
        this.updateRestaurant();
      })
      .catch(err => {console.log(err)});
  }

  submitForm(form) {

    if (this.newBeer.new) {
      delete this.newBeer.new;

      this.beerService.add(this.newBeer)
        .then(() => {
          this.updateBeers();
          this.resetNewBeer();
        })
        .catch(err => {console.log(err)});
    } else {
      this.beerService.update(this.newBeer)
        .then(() => {
          this.updateBeers();
          this.resetNewBeer();
        })
        .catch(err => {console.log(err)});
    }
  }
}

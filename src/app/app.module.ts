import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './pages/beer-list/beer-list.component';
import { DisplayComponent } from './pages/display/display.component';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BeerService } from './services/beer.service';

const routes: Routes = [
  { path: '', component: DisplayComponent },
  { path: ':name', component: BeerListComponent },
  { path: ':name/admin', component: AdminComponent }
  // { path: 'beers', component: HomePageComponent, canActivate: [RequireUserGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    DisplayComponent,
    BeerCardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    RestaurantService,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

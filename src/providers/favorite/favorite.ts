import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;

  constructor(public http: HttpClient) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addFavorite(id: number): boolean {
    this.favorites.push(id); //the same like action should be performed to push data to the server
    return true;
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
  }

}

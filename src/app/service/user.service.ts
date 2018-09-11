import { Injectable } from '@angular/core';
import { LocalStorageService, NgxStorageEvent } from 'ngx-store';
import { PriceonratePipe } from '@app/shared/pipe/priceonrate.pipe';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from '@app/model/user';
import { Movie } from '@app/model/movie';
import { BuyResponse } from '@app/model/buyresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  key = 'userInfo';

  constructor(public localStorageService: LocalStorageService, public priceonratePipe: PriceonratePipe) {}

  getUser(): User {
    const user = this.localStorageService.get(this.key);
    return user ? user : { username: 'User 1', id: 1, money: 100000, owned_video: [] };
  }

  watchStorage(): Observable<NgxStorageEvent> {
    return this.localStorageService.observe().pipe(filter(event => event.key === this.key));
  }

  buyMovie(movie: Movie): Observable<BuyResponse> {
    const user = this.getUser();
    const price = this.priceonratePipe.transform(movie.vote_average);
    if (user.money - price >= 0) {
      user.money = user.money - price;
      user.owned_video.push(movie.id);
      this.localStorageService.set(this.key, user);
      return of({ status: 'ok', message: 'Success buy!' });
    } else {
      return of({ status: 'error', message: "Sorry, You don't have enough money!" });
    }
  }

  isOwnMovie(movieId: number) {
    const user = this.getUser();
    return user.owned_video.indexOf(movieId) >= 0;
  }
}

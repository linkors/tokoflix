import { Injectable } from '@angular/core';
import { LocalStorageService, NgxStorageEvent } from 'ngx-store';
import { PriceonratePipe } from '@app/shared/pipe/priceonrate.pipe';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from '@app/model/user';
import { Movie } from '@app/model/movie';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  key: string = 'userInfo';

  constructor(
    public localStorageService: LocalStorageService,
    public priceonratePipe: PriceonratePipe,
  ) {}

  getUser (): User {
    const user = this.localStorageService.get(this.key);
    return user ? user : {username: 'User 1', id: 1, money: 100000, owned_video: []};
  }

  watchStorage(): Observable<NgxStorageEvent>{
    return  this.localStorageService.observe();
  }

  buyMovie (movie: Movie) {
    const user = this.getUser ();
    const price =  this.priceonratePipe.transform(movie.vote_average);
    user.money = user.money - price;
    user.owned_video.push(movie.id);
    this.localStorageService.set(this.key, user);
  }

  isOwnMovie (movieId: number) {
    const user = this.getUser ();
    return user.owned_video.indexOf(movieId) >= 0;
  }
}

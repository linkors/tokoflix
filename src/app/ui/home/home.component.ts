import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';

import { UserService } from '@app/service/user.service';
import { TmdbService } from '@app/service/tmdb.service';
import { AlertService } from '@app/service/alert.service';
import { Movie } from '@app/model/movie';
import { ImageConf } from '@app/model/imageconf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pagination: any;
  movies: Movie[];

  @LocalStorage('imageConfig')
  config: ImageConf;

  constructor(
    private tmdbService: TmdbService,
    public userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.pagination = {};
    this.pagination.totalItem = 99;
    this.route.queryParams.subscribe(params => {
      this.pagination.currentPage = +params['page'] || 1;
    });
    this.getMovie(this.pagination.currentPage);
  }

  getMovie(page) {
    this.tmdbService.getNowPlaying(page).subscribe(resp => {
      this.pagination.totalItem = resp.total_results;
      this.movies = resp.results;
    });
  }

  buy(event: Event, movie: Movie) {
    event.stopPropagation();
    this.userService.buyMovie(movie).subscribe(data => {
      if (data.status === 'ok') {
        this.alertService.success(data.message);
      } else {
        this.alertService.error(data.message);
      }
    });
  }

  openMovie(e, movie) {
    this.router.navigate(['/' + movie.id + '-' + movie.original_title.replace(new RegExp(' ', 'g'), '-')]);
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { page: this.pagination.currentPage } });
    this.getMovie(this.pagination.currentPage);
  }
}

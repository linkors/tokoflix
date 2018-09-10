import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalStorage } from 'ngx-store';

import { TmdbService } from '@app/service/tmdb.service';
import { Movie } from '@app/model/movie';
import { ImageConf } from '@app/model/imageconf';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @LocalStorage('imageConfig') config: ImageConf;

  movie: Movie;
  movieId: number;

  similarMovies: Movie[];
  recommendedMovies: Movie[];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    this.movieId = +param.split('-')[0];

    this.getMovieDetail();
    this.getSimilarMovie();
    this.getRecommendation();
  }

  getMovieDetail () {
    this.tmdbService.getMovieDetail(this.movieId)
    .subscribe(resp => {
      this.movie = resp;
    });
  }

  getSimilarMovie () {
    this.tmdbService.getSimilarMovie(this.movieId, 1)
    .subscribe(resp => {
      this.similarMovies = resp.results;
    });
  }

  getRecommendation () {
    this.tmdbService.getRecommendation(this.movieId, 1)
    .subscribe(resp => {
      this.recommendedMovies = resp.results;
    });
  }
}

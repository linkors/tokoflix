import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { UserService } from '@app/service/user.service';
import { TmdbService } from '@app/service/tmdb.service';
import { AlertService } from '@app/service/alert.service';
import { Movie } from '@app/model/movie';
import { ImageConf } from '@app/model/imageconf';
import { YoutubeplayerComponent } from '@app/ui/shared/modal/youtubeplayer/youtubeplayer.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @LocalStorage('imageConfig')
  config: ImageConf;

  movie: Movie;
  movieId: number;

  similarMovies: Movie[];
  recommendedMovies: Movie[];

  bsModalRef: BsModalRef;

  constructor(
    private tmdbService: TmdbService,
    public userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    this.movieId = +param.split('-')[0];
    this.initData();
  }

  initData() {
    this.getMovieDetail();
    this.getSimilarMovie();
    this.getRecommendation();
  }

  getMovieDetail() {
    this.tmdbService.getMovieDetail(this.movieId).subscribe(resp => {
      this.movie = resp;
    });
  }

  getSimilarMovie() {
    this.tmdbService.getSimilarMovie(this.movieId, 1).subscribe(resp => {
      this.similarMovies = resp.results;
    });
  }

  getRecommendation() {
    this.tmdbService.getRecommendation(this.movieId, 1).subscribe(resp => {
      this.recommendedMovies = resp.results;
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
    this.movieId = movie.id;
    this.initData();
  }

  openTrailer(video) {
    const initialState = {
      key: video.key
    };
    this.bsModalRef = this.modalService.show(YoutubeplayerComponent, {
      class: 'modal-lg tf-youtube-modal',
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

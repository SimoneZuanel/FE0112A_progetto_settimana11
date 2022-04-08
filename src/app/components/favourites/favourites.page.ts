import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MovieService } from '../movies/movies.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  template: `
  <div class="container mt-4 bg-light shadow-lg p-3 mb-5 rounded justify-content-around w-50 text-center ">
    <h2>Utente: {{nameUser}} {{surnameUser}}</h2>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class FavouritesPage implements OnInit {
  nameUser!: string | undefined;
  surnameUser!: string | undefined;
  users!: User[];
  preferiti = this.movieSrv.preferiti;
  constructor( private authSrv: AuthService, private movieSrv: MovieService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((data) => {
      this.nameUser = data?.user.name;
      this.surnameUser = data?.user.surname
    })
  }
}

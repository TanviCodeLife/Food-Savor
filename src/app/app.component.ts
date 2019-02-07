import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { RecipeApiService } from './recipe-api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, RecipeApiService]
})
export class AppComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;


  constructor(private authService: AuthService, private recipeApiService: RecipeApiService, ) {

    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  };

  ngOnInit() {

  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}

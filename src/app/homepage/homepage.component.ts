import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ AuthService, RecipeApiService]
})
export class HomepageComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  constructor(private authService: AuthService, private recipeApiService: RecipeApiService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  getFavorites(){
    this.authService.getFavorites();
  }


  ngOnInit() {

  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

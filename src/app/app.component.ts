import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { RecipeApiService } from './recipe-api.service';
import { HttpClient } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { http-status-codes } from '@types/http-status-codes';


@Component({
  selector: 'app-root',
  template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, RecipeApiService]
})
export class AppComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;


  constructor(private authService: AuthService, private recipeApiService: RecipeApiService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {

  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }

      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }

      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }

      showInfo() {
        this.toastr.info('Just some information for you.');
      }

      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }
    }
}

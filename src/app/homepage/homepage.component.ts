import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ AuthService ]
})
export class HomepageComponent implements OnInit {
  showUserPreferences: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showPreferences(){
    console.log(this.authService.user);
    this.authService.user.subscribe(user => {
      if (user === null) {
        this.authService.login();
      } else {
        this.showUserPreferences = !this.showUserPreferences;
      }
    })
  }

}

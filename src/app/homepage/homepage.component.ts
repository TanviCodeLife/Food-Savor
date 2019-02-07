import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ AuthService ]
})
export class HomepageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  getFavorites(){
    this.authService.getFavorites();
  }

  ngOnInit() {
  }

}

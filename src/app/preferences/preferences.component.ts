import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  providers: [ AuthService ]
})
export class PreferencesComponent implements OnInit {
  preferences: object[] = [
    {"code": "high-protein", "name": "High protein", "checked": false},
    {"code": "low-fat", "name": "Low fat", "checked": false},
    {"code": "low-carb", "name": "Low carb", "checked": false},
    {"code": "vegan", "name": "Vegan", "checked": false},
    {"code": "vegetarian", "name": "Vegetarian", "checked": false},
    {"code": "peanut-free", "name": "Peanut free", "checked": false},
    {"code": "tree-nut-free", "name": "Tree nut free", "checked": false},
    {"code": "sugar-conscious", "name": "Sugar conscious", "checked": false},
    {"code": "alcohol-free", "name": "Alcohol free", "checked": false}
  ];
  userPreferences;

  constructor(private database: AngularFireDatabase, private authService: AuthService) {

  }

  ngOnInit() {
    let user = this.authService.getUser();
    user.subscribe(user => {
       this.database.list(`preferences/${user.uid}`).subscribe(preferenceList => {
        if (preferenceList.length === 0) {
          this.authService.updatePreferences(this.preferences);
        }
        this.userPreferences = preferenceList;
      });
    });
  }

  updatePreference(value){
    let user = this.authService.getUser();
    user.subscribe(user => {
      this.database.list(`preferences/${user.uid}`).subscribe(preferenceList => {
        for (let i = 0; i < preferenceList.length; i++) {
          if (preferenceList[i].code === value) {
            if (preferenceList[i].checked === true) {
              // preferenceList[i].update("checked": false);
            } else if (preferenceList[i].checked === false) {
              // preferenceList[i].update("checked": true);
            }
          }
        }
        this.authService.updatePreferences(this.userPreferences);     });

    });

  }

  getPreferences(){
    let user = this.authService.getUser();
    user.subscribe(user => {
       this.database.list(`preferences/${user.uid}`).subscribe(preferenceList => {
        this.userPreferences = preferenceList;
      });
    });
  }
}

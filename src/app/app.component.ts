import {Component} from '@angular/core';
import {UserService} from "./components/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-table';
  header = ["id", "email", "first_name", "last_name", "avatar"];
  items: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((resp) => {
        // debugger;
          this.items = resp?.data || [];
        }, (error) => {
          console.log(error);
        }
      )
  }
}

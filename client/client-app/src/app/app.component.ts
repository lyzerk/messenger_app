import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginVisible: boolean;

  userId: string;

  ngOnInit() {
    this.loginVisible = true;
  }

  loginOk(user: string) {
    this.userId = user;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showEmail = false;

  emailMe(){
    location.href = "mailto:dan.tiberi@protonmail.com";

    //this.showEmail = !this.showEmail; //Toggles displaying email on each click.
    this.showEmail = true;
  }
}
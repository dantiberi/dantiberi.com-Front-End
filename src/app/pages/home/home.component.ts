import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showEmail = false;

  constructor(private title:Title) {
    
  }

  ngOnInit(): void {
    this.title.setTitle("Dan Tiberi - Home")
  }

  emailMe(){
    location.href = "mailto:dan.tiberi@protonmail.com";

    //this.showEmail = !this.showEmail; //Toggles displaying email on each click.
    this.showEmail = true;
  }
}
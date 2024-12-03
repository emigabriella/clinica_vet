import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './componentes/login/login.service';
import { CommonModule } from '@angular/common';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCAPBERjc7Ic0Itq8FV6owkRfNmDQDKjvI",
      authDomain: "clinic-vet-8a11c.firebaseapp.com",
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
}

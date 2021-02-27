import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  email = '';
  password = '';
  constructor() { }

  ngOnInit(): void {
  }

  logIn(): void {
    localStorage.setItem('user', JSON.stringify({ email: this.email, password: this.password }));
  }
}

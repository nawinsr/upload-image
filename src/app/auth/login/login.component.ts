import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  loginForm = new FormGroup({
    username: new FormControl('a'),
    password: new FormControl('')
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.value.username == 'sa')
      this.router.navigateByUrl('/super-admin/studio-list')
      if (this.loginForm.value.username == 'a')
      this.router.navigateByUrl('/studio/album-list')

  }
}

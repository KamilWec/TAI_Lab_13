import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

credentials = {
 login: '',
 password: ''
};


  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signIn() {
     return this.authService.authenticate(this.credentials).subscribe((result) => {
         	if (!result) {
             	this.logged = false;
         	} else {
             	this.logout = false;
             	this.credentials = {
                 	login: '',
                 	password: ''
             	};
             	this.router.navigate(['/']);
         	}
     	});
  }
 }

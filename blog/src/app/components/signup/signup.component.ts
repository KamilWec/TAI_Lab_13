import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

credentials = {
 name: '',
 email: '',
 password: '',
};

  constructor() { }

  create() {
  this.authService.createOrUpdate(this.credentials).subscribe((result) => {
     return result;
});
}


  ngOnInit() {
  }

}

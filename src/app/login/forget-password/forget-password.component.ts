import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from 'src/app/models/user/forgotPassword';
import { Login } from 'src/app/models/user/login';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  capthaNum: number = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  loginDetails: ForgotPassword = {
    email: '',
    pass: '',
  };
  errorMessage: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    // storing login details in loginDetails object which is entered in the form
    this.loginDetails.email = data.email;
    this.loginDetails.pass = data.password;

    // calling the forgot password function from the service
    this.userService.forgetPassword(this.loginDetails).subscribe(
      (data) => {
        this.router.navigate(['/login']).then(() => {
          window.location.reload();
        });
      },
      // if any error occurs, then show error message
      (error: any) => {
        this.errorMessage = error.error;
      }
    );
  }
  // check if user is already logged in then we don't need to show the forgot password page
  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}

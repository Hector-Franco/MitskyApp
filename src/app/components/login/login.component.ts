import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private restUser: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }


  public loginUser(email: string, password: string) {

    this.restUser.loginUser(email, password)
    .subscribe
    (
      (result) =>
      {
        console.log(result);
        this.router.navigate(['/clubs']);
      },
      (error) => console.log('error logging')
    );
  }
}

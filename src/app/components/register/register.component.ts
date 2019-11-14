import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  name: string;
  lastname: string;
  birthdate: string;
  password: string;
  constructor(private restUser: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  addUser(email: string,
    name: string,
    lastname: string,
    birthdate: string,
    password: string) {

    this.restUser.addUser(email, name, lastname, birthdate, password)
      .subscribe
      (
        (result) =>
        {
          console.log('EXITO');
          this.router.navigate(['/clubs']);
        },
        (error) => console.log('ERROR')
      );
  }



}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: any = [];

  constructor(private restUser: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.restUser.getUsers().subscribe((users: {}) => {
      console.log(users);
      this.users = users;
    });
  }


  addUser(email: string,
          name: string,
          lastname: string,
          birthdate: string,
          password: string) {

    this.restUser.addUser(email, name, lastname, birthdate, password)
      .subscribe
      (
        (result) => console.log('EXITO'),
        (error) => console.log('ERROR')
      );
  }

}

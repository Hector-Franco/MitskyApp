import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../services/clubs/clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs: any = [];
  constructor(public rest: ClubsService) { }

  ngOnInit() {
    this.getClubs();
  }

  getClubs() {
    this.rest.getClubs()
      .subscribe(
        (data) => {
          console.log(data);
          this.clubs = data;
        }
      );
  }
}

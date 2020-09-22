import { Component, OnInit } from '@angular/core';
import { UserService } from '../my-services/sync/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  address = "Dasma Cavite"

  users = []

  selectedUser

  ngOnInit() {
    this.userService.getUserList().subscribe((data) => {
      console.log(data)
      this.users = data
    },
    (error) => {
      console.log(error)
    })
  }

  onSelect(user) {
    console.log(user)
    this.selectedUser = user
  }

}

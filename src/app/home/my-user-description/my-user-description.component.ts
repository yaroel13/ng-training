import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-user-description',
  templateUrl: './my-user-description.component.html',
  styleUrls: ['./my-user-description.component.scss']
})
export class MyUserDescriptionComponent implements OnInit {

  @Input() selectedItem

  constructor() { }

  ngOnInit() {
  }

}

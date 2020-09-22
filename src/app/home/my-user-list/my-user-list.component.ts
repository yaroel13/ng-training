import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-user-list',
  templateUrl: './my-user-list.component.html',
  styleUrls: ['./my-user-list.component.scss']
})
export class MyUserListComponent implements OnInit {

  @Input() dataSet
  @Output() selectItemEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onSelect(user) {
    console.log(user)
    this.selectItemEvent.emit(user)
  }

}

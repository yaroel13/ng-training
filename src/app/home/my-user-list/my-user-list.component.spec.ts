import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserListComponent } from './my-user-list.component';

describe('MyUserListComponent', () => {
  let component: MyUserListComponent;
  let fixture: ComponentFixture<MyUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

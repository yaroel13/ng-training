import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserDescriptionComponent } from './my-user-description.component';

describe('MyUserDescriptionComponent', () => {
  let component: MyUserDescriptionComponent;
  let fixture: ComponentFixture<MyUserDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

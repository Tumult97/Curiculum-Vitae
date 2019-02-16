import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryEducationComponent } from './secondary-education.component';

describe('SecondaryEducationComponent', () => {
  let component: SecondaryEducationComponent;
  let fixture: ComponentFixture<SecondaryEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

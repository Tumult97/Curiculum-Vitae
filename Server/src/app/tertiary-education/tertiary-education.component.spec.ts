import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryEducationComponent } from './tertiary-education.component';

describe('TertiaryEducationComponent', () => {
  let component: TertiaryEducationComponent;
  let fixture: ComponentFixture<TertiaryEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TertiaryEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TertiaryEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

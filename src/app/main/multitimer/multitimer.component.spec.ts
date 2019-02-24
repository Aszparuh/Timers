import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitimerComponent } from './multitimer.component';

describe('MultitimerComponent', () => {
  let component: MultitimerComponent;
  let fixture: ComponentFixture<MultitimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultitimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultitimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

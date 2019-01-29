import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletimerComponent } from './singletimer.component';

describe('SingletimerComponent', () => {
  let component: SingletimerComponent;
  let fixture: ComponentFixture<SingletimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

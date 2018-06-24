import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsFiredComponent } from './alarms-fired.component';

describe('AlarmsFiredComponent', () => {
  let component: AlarmsFiredComponent;
  let fixture: ComponentFixture<AlarmsFiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsFiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsFiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

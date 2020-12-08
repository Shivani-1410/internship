import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ques4Component } from './ques4.component';

describe('Ques4Component', () => {
  let component: Ques4Component;
  let fixture: ComponentFixture<Ques4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ques4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ques4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

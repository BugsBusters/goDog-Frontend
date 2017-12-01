import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmicismarritiComponent } from './amicismarriti.component';

describe('AmicismarritiComponent', () => {
  let component: AmicismarritiComponent;
  let fixture: ComponentFixture<AmicismarritiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmicismarritiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmicismarritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmicosmarritoComponent } from './amicosmarrito.component';

describe('AmicosmarritoComponent', () => {
  let component: AmicosmarritoComponent;
  let fixture: ComponentFixture<AmicosmarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmicosmarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmicosmarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

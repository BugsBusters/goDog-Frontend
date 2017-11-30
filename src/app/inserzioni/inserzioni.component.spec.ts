import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserzioniComponent } from './inserzioni.component';

describe('InserzioniComponent', () => {
  let component: InserzioniComponent;
  let fixture: ComponentFixture<InserzioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserzioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

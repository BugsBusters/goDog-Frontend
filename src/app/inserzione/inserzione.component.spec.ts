import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserzioneComponent } from './inserzione.component';

describe('InserzioneComponent', () => {
  let component: InserzioneComponent;
  let fixture: ComponentFixture<InserzioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserzioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

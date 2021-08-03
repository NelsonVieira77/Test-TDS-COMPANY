import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairbanksComponent } from './fairbanks.component';

describe('FairbanksComponent', () => {
  let component: FairbanksComponent;
  let fixture: ComponentFixture<FairbanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairbanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

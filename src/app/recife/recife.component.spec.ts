import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecifeComponent } from './recife.component';

describe('RecifeComponent', () => {
  let component: RecifeComponent;
  let fixture: ComponentFixture<RecifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YakutskComponent } from './yakutsk.component';

describe('YakutskComponent', () => {
  let component: YakutskComponent;
  let fixture: ComponentFixture<YakutskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YakutskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YakutskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

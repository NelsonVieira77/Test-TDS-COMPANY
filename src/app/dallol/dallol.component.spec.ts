import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { DallolComponent } from './dallol.component';

describe('DallolComponent', () => {
  let component: DallolComponent;
  let fixture: ComponentFixture<DallolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DallolComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DallolComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DallolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('a api está funcionando', inject([DallolComponent], (service: DallolComponent) => {
    expect(service.apiOk('data')).toBeTruthy();
  }));

  it('a api não está funcionando', inject([DallolComponent], (service: DallolComponent) => {
    expect(service.apiOk('data')).toBeFalsy();
  }));
});


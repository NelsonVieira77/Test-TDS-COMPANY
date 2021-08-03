import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VancouverComponent } from './vancouver.component';

describe('VancouverComponent', () => {
  let component: VancouverComponent;
  let fixture: ComponentFixture<VancouverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VancouverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VancouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

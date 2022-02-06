import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmNgDclComponent } from './sm-ng-dcl.component';

describe('SmNgDclComponent', () => {
  let component: SmNgDclComponent;
  let fixture: ComponentFixture<SmNgDclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmNgDclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmNgDclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

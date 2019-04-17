import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoComponent } from './component-two.component';

describe('ComponentTwoComponent', () => {
  let component: ComponentTwoComponent;
  let fixture: ComponentFixture<ComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNewAppComponent } from './child-new-app.component';

describe('ChildNewAppComponent', () => {
  let component: ChildNewAppComponent;
  let fixture: ComponentFixture<ChildNewAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNewAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

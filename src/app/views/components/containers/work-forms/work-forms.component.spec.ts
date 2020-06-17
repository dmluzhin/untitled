import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFormsComponent } from './work-forms.component';

describe('WorkFormsComponent', () => {
  let component: WorkFormsComponent;
  let fixture: ComponentFixture<WorkFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

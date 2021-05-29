import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxBoxComponent } from './checkbox-box.component';

describe('CheckboxBoxComponent', () => {
  let component: CheckboxBoxComponent;
  let fixture: ComponentFixture<CheckboxBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

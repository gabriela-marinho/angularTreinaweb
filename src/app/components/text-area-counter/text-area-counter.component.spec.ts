import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaCounterComponent } from './text-area-counter.component';

describe('TextAreaCounterComponent', () => {
  let component: TextAreaCounterComponent;
  let fixture: ComponentFixture<TextAreaCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

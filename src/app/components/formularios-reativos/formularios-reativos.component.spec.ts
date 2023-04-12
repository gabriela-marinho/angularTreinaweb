import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReativosComponent } from './formularios-reativos.component';

describe('FormulariosReativosComponent', () => {
  let component: FormulariosReativosComponent;
  let fixture: ComponentFixture<FormulariosReativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosReativosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosReativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

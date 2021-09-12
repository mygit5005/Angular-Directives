import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoComponent } from './input-deco.component';

describe('InputDecoComponent', () => {
  let component: InputDecoComponent;
  let fixture: ComponentFixture<InputDecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

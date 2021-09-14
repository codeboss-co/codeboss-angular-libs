import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGenericTableComponent } from './mat-generic-table.component';

describe('MatGenericTableComponent', () => {
  let component: MatGenericTableComponent;
  let fixture: ComponentFixture<MatGenericTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatGenericTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

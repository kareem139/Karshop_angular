import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQvComponent } from './product-qv.component';

describe('ProductQvComponent', () => {
  let component: ProductQvComponent;
  let fixture: ComponentFixture<ProductQvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

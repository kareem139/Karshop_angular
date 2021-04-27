import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopshomeComponent } from './shopshome.component';

describe('ShopshomeComponent', () => {
  let component: ShopshomeComponent;
  let fixture: ComponentFixture<ShopshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

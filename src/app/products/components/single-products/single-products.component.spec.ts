import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductsComponent } from './single-products.component';

describe('SingleProductsComponent', () => {
  let component: SingleProductsComponent;
  let fixture: ComponentFixture<SingleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

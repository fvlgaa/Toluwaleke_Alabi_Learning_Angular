import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHairProductItemComponent } from './modify-hair-product-item.component';

describe('ModifyHairProductItemComponent', () => {
  let component: ModifyHairProductItemComponent;
  let fixture: ComponentFixture<ModifyHairProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyHairProductItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyHairProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

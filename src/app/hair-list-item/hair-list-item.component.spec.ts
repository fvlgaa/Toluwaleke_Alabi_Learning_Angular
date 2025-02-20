import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairListItemComponent } from './hair-list-item.component';

describe('HairListItemComponent', () => {
  let component: HairListItemComponent;
  let fixture: ComponentFixture<HairListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

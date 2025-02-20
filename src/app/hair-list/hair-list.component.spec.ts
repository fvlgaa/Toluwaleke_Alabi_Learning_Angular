import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairListComponent } from './hair-list.component';

describe('HairListComponent', () => {
  let component: HairListComponent;
  let fixture: ComponentFixture<HairListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

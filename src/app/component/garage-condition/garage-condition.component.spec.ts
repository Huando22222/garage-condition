import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageConditionComponent } from './garage-condition.component';

describe('GarageConditionComponent', () => {
  let component: GarageConditionComponent;
  let fixture: ComponentFixture<GarageConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarageConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

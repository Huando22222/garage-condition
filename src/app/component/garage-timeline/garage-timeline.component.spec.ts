import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageTimelineComponent } from './garage-timeline.component';

describe('GarageTimelineComponent', () => {
  let component: GarageTimelineComponent;
  let fixture: ComponentFixture<GarageTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarageTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearGarageCardComponent } from './near-garage-card.component';

describe('NearGarageCardComponent', () => {
  let component: NearGarageCardComponent;
  let fixture: ComponentFixture<NearGarageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearGarageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearGarageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

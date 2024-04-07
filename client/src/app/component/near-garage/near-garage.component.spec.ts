import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearGarageComponent } from './near-garage.component';

describe('NearGarageComponent', () => {
  let component: NearGarageComponent;
  let fixture: ComponentFixture<NearGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearGarageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NearGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

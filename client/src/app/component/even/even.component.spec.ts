import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVENComponent } from './even.component';

describe('EVENComponent', () => {
  let component: EVENComponent;
  let fixture: ComponentFixture<EVENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EVENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

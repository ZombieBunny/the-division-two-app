import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearModelCardComponent } from './gear-model-card.component';

describe('GearModelCardComponent', () => {
  let component: GearModelCardComponent;
  let fixture: ComponentFixture<GearModelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearModelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

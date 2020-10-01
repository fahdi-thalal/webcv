import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RogerSkylineComponent } from './roger-skyline.component';

describe('RogerSkylineComponent', () => {
  let component: RogerSkylineComponent;
  let fixture: ComponentFixture<RogerSkylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RogerSkylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RogerSkylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

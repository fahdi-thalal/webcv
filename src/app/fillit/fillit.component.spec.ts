import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillitComponent } from './fillit.component';

describe('FillitComponent', () => {
  let component: FillitComponent;
  let fixture: ComponentFixture<FillitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

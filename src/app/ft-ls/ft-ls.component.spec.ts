import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtLsComponent } from './ft-ls.component';

describe('FtLsComponent', () => {
  let component: FtLsComponent;
  let fixture: ComponentFixture<FtLsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtLsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

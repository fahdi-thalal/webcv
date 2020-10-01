import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtPrintfComponent } from './ft-printf.component';

describe('FtPrintfComponent', () => {
  let component: FtPrintfComponent;
  let fixture: ComponentFixture<FtPrintfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtPrintfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtPrintfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

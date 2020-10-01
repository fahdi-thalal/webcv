import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbNavbarComponent } from './mdb-navbar.component';

describe('MdbNavbarComponent', () => {
  let component: MdbNavbarComponent;
  let fixture: ComponentFixture<MdbNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

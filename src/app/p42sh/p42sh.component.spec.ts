import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P42shComponent } from './p42sh.component';

describe('P42shComponent', () => {
  let component: P42shComponent;
  let fixture: ComponentFixture<P42shComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P42shComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P42shComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

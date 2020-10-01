import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibftComponent } from './libft.component';

describe('LibftComponent', () => {
  let component: LibftComponent;
  let fixture: ComponentFixture<LibftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

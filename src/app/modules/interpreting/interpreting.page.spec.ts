import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpretingPage } from './interpreting.page';

describe('InterpretingPage', () => {
  let component: InterpretingPage;
  let fixture: ComponentFixture<InterpretingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterpretingPage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

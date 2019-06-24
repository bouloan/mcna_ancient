import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalNoticePage } from './legal-notice.page';

describe('LegalNoticePage', () => {
  let component: LegalNoticePage;
  let fixture: ComponentFixture<LegalNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegalNoticePage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

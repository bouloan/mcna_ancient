import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamPresentationPage } from './team-presentation.page';

describe('TeamPresentationPage', () => {
  let component: TeamPresentationPage;
  let fixture: ComponentFixture<TeamPresentationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamPresentationPage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPresentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

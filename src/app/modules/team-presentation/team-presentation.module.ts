import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TeamPresentationPage } from './team-presentation.page';

const routes: Routes = [{ path: '', component: TeamPresentationPage }];

@NgModule({
  declarations: [TeamPresentationPage],
  imports: [TranslateModule.forChild(), RouterModule.forChild(routes)]
})
export class TeamPresentationModule {}

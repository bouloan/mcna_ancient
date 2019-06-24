import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNoticePage } from './legal-notice.page';

const routes: Routes = [{ path: '', component: LegalNoticePage }];

@NgModule({
  declarations: [LegalNoticePage],
  imports: [TranslateModule.forChild(), RouterModule.forChild(routes)]
})
export class LegalNoticeModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesPage } from './courses.page';

const routes: Routes = [{ path: '', component: CoursesPage }];

@NgModule({
  declarations: [CoursesPage],
  imports: [CommonModule, TranslateModule.forChild(), RouterModule.forChild(routes), SharedModule]
})
export class CoursesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterpretingPage } from './interpreting.page';

const routes: Routes = [{ path: '', component: InterpretingPage }];

@NgModule({
  declarations: [InterpretingPage],
  imports: [CommonModule, TranslateModule.forChild(), RouterModule.forChild(routes), SharedModule]
})
export class InterpretingModule {}

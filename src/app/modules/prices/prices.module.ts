import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PricesPage } from './prices.page';

const routes: Routes = [{ path: '', component: PricesPage }];

@NgModule({
  declarations: [PricesPage],
  imports: [TranslateModule.forChild(), RouterModule.forChild(routes)]
})
export class PricesModule {}

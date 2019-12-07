import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ActivityItemComponent } from "./component/activity-item/activity-item.component";
import { HomeComponent } from "./home.page";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, ActivityItemComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule
  ]
})
export class HomeModule {}

import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  images: string[];

  activitiesList: Activity[];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.stream('activity').subscribe((r) => {
      this.activitiesList = r;
    });
  }

}

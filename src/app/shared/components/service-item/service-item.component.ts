import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@models/activity.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() activity: Activity;
  @Input() index: number;
  @Input() image: string;

  constructor() {}

  ngOnInit() {}

  styleImage(): Object {
    return {
      background: 'url(' + this.image + ') no-repeat center center ',
      backgroundSize: 'cover'
    };
  }
}

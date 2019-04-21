import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input() activity: Activity;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

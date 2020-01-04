import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoveWhiteSpacePipe } from '@custom-pipes/remove-white-space.pipe';
import { Activity } from 'src/app/shared/interfaces/activity.interface';

@Component({
	selector: 'app-activity-item',
	templateUrl: './activity-item.component.html',
	styleUrls: [ './activity-item.component.scss' ],
	providers: [ RemoveWhiteSpacePipe ]
})
export class ActivityItemComponent implements OnInit {
	@Input() activity: Activity;
	@Input() index: number;

	constructor(public removeWhiteSpace: RemoveWhiteSpacePipe, private _router: Router) {}

	ngOnInit() {}
}

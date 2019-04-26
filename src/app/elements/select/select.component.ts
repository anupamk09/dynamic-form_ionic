import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-select",
  template: `
  	<ion-card [formGroup]="group">
	  	<ion-card-content>
			<ion-label color="primary">{{field.label}}</ion-label>
		    <ion-select [formControlName]="field.name">
		      <ion-select-option *ngFor="let item of field.options" [value]="item">{{item}}</ion-select-option>
		    </ion-select>
	    </ion-card-content>
    </ion-card>
	`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

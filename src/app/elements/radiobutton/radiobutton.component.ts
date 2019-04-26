import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-radiobutton",
  template: `
  			<ion-card [formGroup]="group">
			  <ion-card-content>
			  	<ion-label color="primary">{{field.label}}</ion-label>
			    <ion-radio-group [formControlName]="field.name">
				    <ion-item *ngFor="let item of field.options" lines="none">
				      <ion-label>{{item}}</ion-label>
				      <ion-radio slot="start" [value]="item"></ion-radio>
				    </ion-item>
			  	</ion-radio-group>
			  </ion-card-content>
			</ion-card>
`,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

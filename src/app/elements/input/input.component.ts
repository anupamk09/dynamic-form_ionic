import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-input",
  template: `
  	<ion-card [formGroup]="group">
  		<ion-card-content>
  			<ion-label color="primary">{{field.label}}</ion-label>
	    	<ion-input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType"></ion-input>
  		</ion-card-content>
	</ion-card>`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

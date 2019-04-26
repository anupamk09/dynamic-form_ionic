import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-checkbox",
  template: `
	<ion-card [formGroup]="group">
	  	<ion-card-content>
			<ion-checkbox color="primary" [formControlName]="field.name"></ion-checkbox><ion-label color="primary">{{field.label}}</ion-label>
	    </ion-card-content>
    </ion-card>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

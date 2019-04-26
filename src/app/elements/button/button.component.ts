import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-button",
  template: `
			<ion-card [formGroup]="group">
			  <ion-card-content>
			    	<ion-button expand="block">{{field.label}}</ion-button>
			  </ion-card-content>
			</ion-card>

`,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

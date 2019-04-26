import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-textarea",
  template: `
  	<ion-card [formGroup]="group">
  		<ion-card-content>
			  <ion-label color="primary">{{field.label}}</ion-label>
	      <ion-textarea [formControlName]="field.name" [placeholder]="field.label"></ion-textarea>
  		</ion-card-content>
	</ion-card>`,
  styles: []
})

export class TextareaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}

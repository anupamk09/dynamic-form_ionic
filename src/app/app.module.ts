import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./elements/input/input.component";
import { ButtonComponent } from "./elements/button/button.component";
import { SelectComponent } from "./elements/select/select.component";
import { CheckboxComponent } from "./elements/checkbox/checkbox.component";
import { DateComponent } from "./elements/date/date.component";
import { RadiobuttonComponent } from "./elements/radiobutton/radiobutton.component";
import { DynamicFieldDirective } from "./elements/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./elements/dynamic-form/dynamic-form.component";
import { TextareaComponent } from "./elements/textarea/textarea.component";

@NgModule({
  declarations: [AppComponent,
  InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    TextareaComponent],
  entryComponents: [InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareaComponent],
  imports: [
  BrowserModule,
  IonicModule.forRoot(), 
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

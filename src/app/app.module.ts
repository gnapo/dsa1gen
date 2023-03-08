import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatlineComponent } from './statline/statline.component';
import { AttributeComponent } from './attribute/attribute.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { TypuspickerComponent } from './typuspicker/typuspicker.component';
import { RuestungpickerComponent } from './ruestungpicker/ruestungpicker.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WaffenpickerComponent } from './waffenpicker/waffenpicker.component';
import { WaffenschadenlineComponent } from './waffenschadenline/waffenschadenline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    StatlineComponent,
    AttributeComponent,
    HerodetailsComponent,
    TypuspickerComponent,
    RuestungpickerComponent,
    WaffenpickerComponent,
    WaffenschadenlineComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

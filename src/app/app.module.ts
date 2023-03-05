import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatlineComponent } from './statline/statline.component';
import { AttributeComponent } from './attribute/attribute.component';
import {TooltipModule} from "ng2-tooltip-directive";
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { TypuspickerComponent } from './typuspicker/typuspicker.component';
import { RuestungpickerComponent } from './ruestungpicker/ruestungpicker.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WaffenpickerComponent } from './waffenpicker/waffenpicker.component';
import { WaffenschadenlineComponent } from './waffenschadenline/waffenschadenline.component';

@NgModule({
  declarations: [
    AppComponent,
    StatlineComponent,
    AttributeComponent,
    HerodetailsComponent,
    TypuspickerComponent,
    RuestungpickerComponent,
    WaffenpickerComponent,
    WaffenschadenlineComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

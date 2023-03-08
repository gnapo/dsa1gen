import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Typus} from "../typus";
import {waffen} from "./waffen"
import {FormControl, FormGroup} from "@angular/forms";
import {Waffe} from "./waffe";

@Component({
  selector: 'app-waffenpicker',
  templateUrl: './waffenpicker.component.html',
  styleUrls: ['./waffenpicker.component.css']
})
export class WaffenpickerComponent implements OnInit{
  @Input() typus: Typus | undefined = undefined

  @Output() TPW = new EventEmitter<number>()
  @Output() TPB = new EventEmitter<number>()
  @Output() AT = new EventEmitter<number>()
  @Output() PA = new EventEmitter<number>()
  @Output() BF = new EventEmitter<number>()

  waffen = waffen

  selectedWaffe: Waffe | undefined



  form = new FormGroup({
    waffenState: new FormControl(waffen[6]),
  });

  ngOnInit() {
    // @ts-ignore
    this.form.get("waffenState").valueChanges.subscribe(w => {this.setWaffe(w)})
  }

  setWaffe(waffe: Waffe) {
    this.selectedWaffe = waffe
    this.sendValues();
  }

  sendValues() {
    if (this.selectedWaffe) {
      this.TPW.emit(this.selectedWaffe.tpWuerfel)
      this.TPB.emit(this.selectedWaffe.tpBonus)
      this.AT.emit(this.selectedWaffe.AT)
      this.PA.emit(this.selectedWaffe.PA)
      this.BF.emit(this.selectedWaffe.BF)
    }
  }

  availableWaffen(): Waffe[] {
    if (this.typus === Typus.Krieger) {
      return waffen
    }
    if (this.typus === Typus.Magier) {
      return [

      ]
    }
    return waffen.slice(0,10)
  }

  waffeDisabled(waffe: Waffe) {
    return !waffe.typusDarf.includes(this.typus ?? Typus.Abenteurer)
  }
}

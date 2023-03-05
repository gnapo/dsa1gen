import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Typus} from "../typus";
import {waffen} from "./waffen"
import {Ruestung} from "../ruestungpicker/ruestung";
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

  selectedWaffe: Waffe = waffen[6]



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
    this.TPW.emit(this.selectedWaffe.tpWuerfel)
    this.TPB.emit(this.selectedWaffe.tpBonus)
    this.AT.emit(this.selectedWaffe.AT)
    this.PA.emit(this.selectedWaffe.PA)
    this.BF.emit(this.selectedWaffe.BF)
  }

  availableWaffen(): Waffe[] {
    if (this.typus === Typus.Krieger) {
      return waffen
    }
    if (this.typus === Typus.Magier) {
      return [
        {
          name: "Dolch",
          tpWuerfel: 1,
          tpBonus: 1,
          AT: 0,
          PA: -4,
          BF: 3,
        },
        {
          name: "Zauberstab",
          tpWuerfel: 1,
          tpBonus: 2,
          AT: -1,
          PA: -3,
          BF: 6,
        },
      ]
    }
    return waffen.slice(0,10)
  }
}

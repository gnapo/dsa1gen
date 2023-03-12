import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Typus} from "../typus";
import {waffen} from "./waffen"
import {Waffe} from "./waffe";

@Component({
  selector: 'app-waffenpicker',
  templateUrl: './waffenpicker.component.html',
  styleUrls: ['./waffenpicker.component.css']
})
export class WaffenpickerComponent{
  @Input() typus: Typus | undefined = undefined
  @Input() selectedWaffe: Waffe | undefined

  @Output() waffe = new EventEmitter<Waffe>()

  waffen = waffen

  sendValues() {
    if (this.selectedWaffe) {
      this.waffe.emit(this.selectedWaffe)
    }
  }

  waffeDisabled(waffe: Waffe) {
    return !waffe.typusDarf.includes(this.typus ?? Typus.Abenteurer)
  }

  sameName(w1: Waffe, w2: Waffe) {
    return w1?.name === w2?.name
  }
}

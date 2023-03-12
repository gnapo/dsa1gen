import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Typus} from "../typus";
import {Ruestung} from "./ruestung";
import {ruestungen} from "./ruestungen"
import {Waffe} from "../waffenpicker/waffe";

@Component({
  selector: 'app-ruestungpicker',
  templateUrl: './ruestungpicker.component.html',
  styleUrls: ['./ruestungpicker.component.css']
})
export class RuestungpickerComponent{
  @Input() typus: Typus | undefined = undefined
  @Input() selectedRuestung: Ruestung | undefined = ruestungen[1]
  @Input() schild: boolean = false

  @Output() ruestung = new EventEmitter<Ruestung>()
  @Output() schildChange = new EventEmitter<boolean>()

  ruestungen = ruestungen



  ruestungDisabled(state: Ruestung) {
    return !state.typusDarf.includes(this.typus ?? Typus.Abenteurer)
  }

  sameName(w1: Waffe, w2: Waffe) {
    return w1?.name === w2?.name
  }
}

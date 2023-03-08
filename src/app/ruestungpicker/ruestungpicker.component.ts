import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Typus} from "../typus";
import {Ruestung} from "./ruestung";
import {ruestungen} from "./ruestungen"
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ruestungpicker',
  templateUrl: './ruestungpicker.component.html',
  styleUrls: ['./ruestungpicker.component.css']
})
export class RuestungpickerComponent implements OnInit{
  @Input() typus: Typus | undefined = undefined

  @Output() RS = new EventEmitter<number>()
  @Output() minusGE = new EventEmitter<number>()

  ruestungen = ruestungen
  selectedRuestung: Ruestung = ruestungen[1]
  schildRS = 0
  hatSchild = false

  form = new FormGroup({
    ruestungState: new FormControl(ruestungen[1]),
  });

  ngOnInit() {
    // @ts-ignore
    this.form.get("ruestungState").valueChanges.subscribe(r => {this.setRuestung(r)})
  }

  setRuestung(ruestung: Ruestung) {
    this.selectedRuestung = ruestung
    this.sendValues();
  }

  changeShild() {
    this.hatSchild = !this.hatSchild
    this.schildRS = this.hatSchild ? 1 : 0
    this.sendValues()
  }

  sendValues() {
    this.RS.emit(this.selectedRuestung.RS + this.schildRS)
    this.minusGE.emit(this.selectedRuestung.minusGE)
  }

  availableRuestungen(): Ruestung[] {
    if (this.typus === Typus.Krieger) {
      return ruestungen
    }
    if (this.typus === Typus.Magier) {
      return ruestungen.slice(0,3)
    }
    return ruestungen.slice(0,6)
  }

  ruestungDisabled(state: Ruestung) {
    return !state.typusDarf.includes(this.typus ?? Typus.Abenteurer)
  }
}

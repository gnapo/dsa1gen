import {Component} from '@angular/core';
import {Held} from "../held";
import {Typus} from "../typus";
import {ruestungen} from "../ruestungpicker/ruestungen";


@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  held = this.newHeld()

  attrups = 0
  ATPAups = 0
  statups = 0

  initialize(): void {
    this.held = this.newHeld()
  }
  randInt(min: number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  newHeld(): Held {
    return {
      name: "",
      typus: undefined,
      stufe: 1,
      MU: this.randInt(8,13),
      KL: this.randInt(8,13),
      CH: this.randInt(8,13),
      GE: this.randInt(8,13),
      KK: this.randInt(8,13),
      LeP: undefined,
      AsP: undefined,
      AT: 10,
      PA: 8,
      ruestung: ruestungen[1],
      hasSchild: false,
      waffe: undefined,
      attrups: 0,
      ATPAups: 0,
      statups: 0,
    }
  }

  incrementMU() {
    this.held.MU += 1
    this.held.attrups -= 1
  }
  incrementKL() {
    this.held.KL += 1
    this.held.attrups -= 1
  }
  incrementCH() {
    this.held.CH += 1
    this.held.attrups -= 1
  }
  incrementGE() {
    this.held.GE += 1
    this.held.attrups -= 1
  }
  incrementKK() {
    this.held.KK += 1
    this.held.attrups -= 1
  }
  incrementAT() {
    this.held.AT += 1
    this.held.ATPAups -= 1
  }
  incrementPA() {
    this.held.PA += 1
    this.held.ATPAups -= 1
  }
  incrementStufe() {
    this.held.stufe += 1
    this.held.attrups += 1
    this.held.ATPAups += 1
    this.held.statups += 1
  }

  setLeP(lep: number) {
    if (this.held.stufe < 2) {
      this.held.LeP = lep
    }
  }

  setAsP(asp: number) {
    if (this.held.stufe < 2) {
      this.held.AsP = asp
    }
  }

  GEATbonus(stat: number) {
    if (stat <9 ) {return -1}
    if (stat >12 ) {return 1}
    return 0
  }

  KKTPbonus(stat: number) {
    if (stat <9 ) {return -1}
    if (stat >12 ) {return stat-12}
    return 0
  }


  nichtFinalerTypus(): boolean {
    return this.held.typus === Typus.Abenteurer || this.held.typus === undefined;
  }

  incrementLeP() {
    if (this.held.LeP) {
      this.held.LeP += this.randInt(1, 6)
    }
    this.held.statups -= 1
  }

  incrementAsP() {
    if (this.held.AsP) {
      this.held.AsP += this.randInt(1, 6)
    }
    this.held.statups -= 1
  }

  calculateRS() {
    const rs = this.held.ruestung?.RS ?? 1
    return rs + (this.held.hasSchild ? 1 : 0);
  }

  saveHeld() {
    sessionStorage.setItem("savedHeld",JSON.stringify(this.held))
  }

  loadHeld() {
    const loaded = sessionStorage.getItem("savedHeld")
    if (loaded){
      this.held = JSON.parse(loaded)
    }
  }

}

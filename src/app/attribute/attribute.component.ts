import {Component} from '@angular/core';
import {Held} from "../held";
import {Typus} from "../typus";


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
  ruestungGEmalus = 0
  waffenATmod = 0
  waffenPAmod = 0

  initialize(): void {
    this.held = this.newHeld()
    this.statups = 0
    this.attrups = 0
    this.ATPAups = 0
    this.ruestungGEmalus = 0
    this.waffenATmod = 0
    this.waffenPAmod = 0
  }
  randInt(min: number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  newHeld(): Held {
    return {
      name: "neuer Abenteurer",
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
      RS: 1,
      schadensWuerfel: 1,
      waffenschaden: 3,
    }
  }

  incrementMU() {
    this.held.MU += 1
    this.attrups -= 1
  }
  incrementKL() {
    this.held.KL += 1
    this.attrups -= 1
  }
  incrementCH() {
    this.held.CH += 1
    this.attrups -= 1
  }
  incrementGE() {
    this.held.GE += 1
    this.attrups -= 1
  }
  incrementKK() {
    this.held.KK += 1
    this.attrups -= 1
  }
  incrementAT() {
    this.held.AT += 1
    this.ATPAups -= 1
  }
  incrementPA() {
    this.held.PA += 1
    this.ATPAups -= 1
  }
  incrementStufe() {
    this.held.stufe += 1
    this.attrups += 1
    this.ATPAups += 1
    this.statups += 1
  }

  setTypus(typus: Typus) {
    this.held.typus = typus
  }
  setRS(RS: number) {
    this.held.RS = RS
  }

  setRuestungGEmalus(minusGE: number) {
    this.ruestungGEmalus= minusGE
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
    this.statups -= 1
  }

  incrementAsP() {
    if (this.held.AsP) {
      this.held.AsP += this.randInt(1, 6)
    }
    this.statups -= 1
  }

  setTPW(TPW: number) {
    this.held.schadensWuerfel = TPW
  }

  setTPB(TPB: number) {
    this.held.waffenschaden = TPB
  }

  setWaffenAT(waffenAT: number) {
    this.waffenATmod = waffenAT
  }
  setWaffenPA(waffenAT: number) {
    this.waffenPAmod = waffenAT
  }
}

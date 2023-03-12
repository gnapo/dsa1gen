import {Typus} from "./typus";
import {Waffe} from "./waffenpicker/waffe";
import {Ruestung} from "./ruestungpicker/ruestung";
export interface Held {
  name: string,
  stufe: number,
  MU: number,
  CH: number,
  KL: number,
  GE: number,
  KK: number,
  LeP: number | undefined,
  AsP: number | undefined,
  typus: Typus | undefined,
  AT: number,
  PA: number,

  ruestung: Ruestung,
  hasSchild: boolean,
  waffe: Waffe | undefined,

  attrups: number
  ATPAups: number
  statups: number

}

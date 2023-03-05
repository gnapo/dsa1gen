import {Typus} from "./typus";
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

  RS: number,
  schadensWuerfel: number,
  waffenschaden: number,

}

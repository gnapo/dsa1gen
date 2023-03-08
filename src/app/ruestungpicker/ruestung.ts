import {Typus} from "../typus";

export interface Ruestung {
  name: string,
  RS: number,
  minusGE: number,
  typusDarf: Typus[],
}

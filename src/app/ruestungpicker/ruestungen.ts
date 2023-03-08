import {Ruestung} from "./ruestung";
import {Typus} from "../typus";

const ALLE_TYPEN: Typus[] = [Typus.Abenteurer,Typus.Elf, Typus.Krieger, Typus.Zwerg, Typus.Magier]
const NICHT_MAGIER: Typus[] = [Typus.Abenteurer,Typus.Elf, Typus.Krieger, Typus.Zwerg]
const NUR_KRIEGER: Typus[] = [Typus.Krieger]


export const ruestungen: Ruestung[] = [
  {
    name: "Lendenschurz",
    RS: 0,
    minusGE: 0,
    typusDarf: ALLE_TYPEN,
  },
  {
    name: "Normale Kleidung",
    RS: 1,
    minusGE: 0,
    typusDarf: ALLE_TYPEN,
  },
  {
    name: "Wattierter Waffenrock",
    RS: 2,
    minusGE: 0,
    typusDarf: ALLE_TYPEN,
  },
  {
    name: "Lederrüstung",
    RS: 3,
    minusGE: 0,
    typusDarf: NICHT_MAGIER,
  },
  {
    name: "Kettenhemd",
    RS: 4,
    minusGE: -1,
    typusDarf: NICHT_MAGIER,
  },
  {
    name: "Schuppenpanzer",
    RS: 5,
    minusGE: -1,
    typusDarf: NICHT_MAGIER,
  },
  {
    name: "Ritterrüstung",
    RS: 6,
    minusGE: -2,
    typusDarf: NUR_KRIEGER,
  },
]

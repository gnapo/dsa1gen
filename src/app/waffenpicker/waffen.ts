import {Waffe} from "./waffe";
import {Typus} from "../typus";

const ALLE_TYPEN: Typus[] = [Typus.Abenteurer,Typus.Elf, Typus.Krieger, Typus.Zwerg, Typus.Magier]
const NICHT_MAGIER: Typus[] = [Typus.Abenteurer,Typus.Elf, Typus.Krieger, Typus.Zwerg]
const NUR_KRIEGER: Typus[] = [Typus.Krieger]
const NUR_MAGIER: Typus[] = [Typus.Magier]
export const waffen: Waffe[] = [
  {
    name: "Messer",
    tpWuerfel: 1,
    tpBonus: 0,
    AT: 0,
    PA: -5,
    BF: 5,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Dolch",
    tpWuerfel: 1,
    tpBonus: 1,
    AT: 0,
    PA: -4,
    BF: 3,
    typusDarf: ALLE_TYPEN,
  },
  {
    name: "Schwerer Dolch",
    tpWuerfel: 1,
    tpBonus: 2,
    AT: 0,
    PA: -2,
    BF: 3,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Kurzschwert",
    tpWuerfel: 1,
    tpBonus: 2,
    AT: 0,
    PA: 0,
    BF: 2,
    typusDarf: NICHT_MAGIER,
  },
  {
    name: "Knüppel",
    tpWuerfel: 1,
    tpBonus: 2,
    AT: -1,
    PA: -3,
    BF: 6,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Wurfbeil (Nahkampf)",
    tpWuerfel: 1,
    tpBonus: 3,
    AT: 0,
    PA: -4,
    BF: 4,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Säbel",
    tpWuerfel: 1,
    tpBonus: 3,
    AT: 0,
    PA: 0,
    BF: 2,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Entermesser",
    tpWuerfel: 1,
    tpBonus: 3,
    AT: 0,
    PA: -1,
    BF: 3,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Schwert",
    tpWuerfel: 1,
    tpBonus: 4,
    AT: 0,
    PA: 0,
    BF: 2,
    typusDarf: NICHT_MAGIER
  },
  {
    name: "Kriegsbeil",
    tpWuerfel: 1,
    tpBonus: 4,
    AT: 0,
    PA: -3,
    BF: 3,typusDarf: NICHT_MAGIER
  },
  {
    name: "BastardSchwert",
    tpWuerfel: 1,
    tpBonus: 5,
    AT: -2,
    PA: -3,
    BF: 2,
    typusDarf: NUR_KRIEGER,
  },
  {
    name: "Zweihänder",
    tpWuerfel: 1,
    tpBonus: 6,
    AT: -3,
    PA: -4,
    BF: 3,
    typusDarf: NUR_KRIEGER,
  },
  {
    name: "Kriegshammer",
    tpWuerfel: 1,
    tpBonus: 6,
    AT: -3,
    PA: -5,
    BF: 4,
    typusDarf: NUR_KRIEGER,
  },
  {
    name: "Barbaren-Streitaxt",
    tpWuerfel: 2,
    tpBonus: 2,
    AT: -4,
    PA: -6,
    BF: 3,
    typusDarf: NUR_KRIEGER,
  },
  {
    name: "Magierstab",
    tpWuerfel: 1,
    tpBonus: 2,
    AT: -1,
    PA: -3,
    BF: 6,
    typusDarf: NUR_MAGIER
  },
]

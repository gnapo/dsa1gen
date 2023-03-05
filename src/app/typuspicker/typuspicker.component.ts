import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Typus} from "../typus";

@Component({
  selector: 'app-typuspicker',
  templateUrl: './typuspicker.component.html',
  styleUrls: ['./typuspicker.component.css']
})
export class TypuspickerComponent {
  @Input() MU: number = 0
  @Input() KL: number = 0
  @Input() CH: number = 0
  @Input() GE: number = 0
  @Input() KK: number = 0
  @Input() nachGenerierung: boolean = false
  @Input() typus: Typus | undefined
  @Output() changeTypus = new EventEmitter<Typus>()
  @Output() setStartLeP = new EventEmitter<number>()
  @Output() setStartAsP = new EventEmitter<number>()



  sendAbenteurer() {
    this.changeTypus.emit(Typus.Abenteurer)
    this.setStartLeP.emit(30)
    this.setStartAsP.emit(0)
  }
  sendElf() {
    this.changeTypus.emit(Typus.Elf)
    this.setStartLeP.emit(25)
    this.setStartAsP.emit(25)
  }
  sendKrieger() {
    this.changeTypus.emit(Typus.Krieger)
    this.setStartLeP.emit(30)
    this.setStartAsP.emit(0)
  }
  sendMagier() {
    this.changeTypus.emit(Typus.Magier)
    this.setStartLeP.emit(20)
    this.setStartAsP.emit(30)
  }
  sendZwerg() {
    this.changeTypus.emit(Typus.Zwerg)
    this.setStartLeP.emit(35)
    this.setStartAsP.emit(0)
  }


}

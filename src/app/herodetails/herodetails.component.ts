import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Typus} from "../typus";

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent {
  @Input() stufe: number = 1

  @Output() levelup = new EventEmitter<void>()

  @Input() typus: Typus | undefined = Typus.Abenteurer

  @Input() name: string = ""
  @Output() nameChange = new EventEmitter<string>()

  sendName(event: any) {
    this.nameChange.emit(event.target.value)
  }

  lvlup() {
    this.levelup.emit()
  }

}

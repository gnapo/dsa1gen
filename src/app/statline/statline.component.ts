import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-statline',
  templateUrl: './statline.component.html',
  styleUrls: ['./statline.component.css']
})
export class StatlineComponent {
  @Input() statname = ""
  @Input() value = 10
  @Input() tt = ""
  @Input() drawButton: any;

  @Output() buttonClicked = new EventEmitter<void>();
  onButtonClick() {
    this.buttonClicked.emit()
  }

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-waffenschadenline',
  templateUrl: './waffenschadenline.component.html',
  styleUrls: ['./waffenschadenline.component.css']
})
export class WaffenschadenlineComponent {
  @Input() TPW: number = 1
  @Input() TPB: number = 3

}

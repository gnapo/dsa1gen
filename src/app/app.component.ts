import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DSA 1 Helden-Generator';

  @ViewChild('heldComponent') child: any;

  initialize() {
    this.child.initialize()
  }

}

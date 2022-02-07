import {Component, OnInit} from '@angular/core';
import {DclHostConfig} from 'sm-ng-dcl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sm-ng-dcl-demo';
  hostConfig: DclHostConfig;

  constructor() {
  }

  ngOnInit() {
    this.hostConfig = {
      componentName: 'CustomComponent',
      componentData: {
        key: 'value'
      }
    };
  }

  getRef(event) {
    console.log(event);
  }

  eventHandler(event) {
    console.log(event);
  }
}

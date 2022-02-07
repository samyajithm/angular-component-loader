import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {registerComponent} from 'sm-ng-dcl';

@registerComponent('CustomComponent')
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() data: any;
  @Output() outEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  action() {
    this.outEmitter.emit('Event from Dynamic Component');
  }
}

import {Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {DclHostConfig} from '../../model/dcl.model';
import {ComponentHostDirective} from '../../directives/component-host.directive';
import {ComponentLoaderService} from '../../service/component-loader.service';

@Component({
  selector: 'sm-ng-dcl',
  template: `
    <ng-template smNgComponentHost></ng-template>`,
  styles: []
})
export class DclComponent implements OnInit, OnChanges {

  @Input() hostConfig: DclHostConfig;
  @Output() componentRefEmitter = new EventEmitter<any>();
  @Output() hostEventEmitter = new EventEmitter<any>();
  @ViewChild(ComponentHostDirective, {static: true}) host: ComponentHostDirective;

  private _ref;

  constructor(public componentFactoryResolver: ComponentFactoryResolver,
              public componentLoaderService: ComponentLoaderService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.hostConfig.forEach((config: DclHostConfig) => {
    if (this.hostConfig && this.hostConfig.componentName) {
      this.loadComponent(this.hostConfig.componentName, this.hostConfig.componentData);
    }
    // });
  }

  loadComponent(componentName, componentData) {
    const componentToLoad: any = this.componentLoaderService.getComponent(componentName);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
    this._ref = this.host.viewContainerRef.createComponent(componentFactory);
    this._ref.instance.data = componentData;
    if (this._ref.instance.outEmitter) {
      this._ref.instance.outEmitter.subscribe(data => {
        this.hostEventEmitter.emit(data);
      });
    }
    this.componentRefEmitter.emit(this._ref);
  }
}

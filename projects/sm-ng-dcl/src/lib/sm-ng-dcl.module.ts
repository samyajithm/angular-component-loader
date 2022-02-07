import {NgModule} from '@angular/core';
import {DclComponent} from './components/dcl/dcl.component';
import {ComponentHostDirective} from './directives/component-host.directive';

export {
  DclComponent,
  ComponentHostDirective
};

export {registerComponent} from './decorator/registerComponent.decorator';

@NgModule({
  declarations: [
    DclComponent,
    ComponentHostDirective
  ],
  imports: [],
  exports: [
    DclComponent,
    ComponentHostDirective
  ]
})

export class SmNgDclModule {
}

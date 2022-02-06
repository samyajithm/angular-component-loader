import {NgModule} from '@angular/core';
import {DclComponent} from './components/dcl/dcl.component';
import {ComponentHostDirective} from './directives/component-host.directive';


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

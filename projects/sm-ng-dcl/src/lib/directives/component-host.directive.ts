import {Directive, ViewContainerRef} from '@angular/core';

/**
 * @author MSamyajith on 06/21/2020
 */

@Directive({
  selector: '[smNgComponentHost]'
})
export class ComponentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}

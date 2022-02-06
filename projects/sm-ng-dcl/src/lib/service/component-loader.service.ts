import {Injectable} from '@angular/core';
import {getRegisteredComponent} from '../decorator/registerComponent.decorator';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() {
  }

  getComponent(className) {
    return getRegisteredComponent(className);
  }
}

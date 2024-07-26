import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SmNgDclModule} from 'sm-ng-dcl';
import {CustomComponent} from './components/custom/custom.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomComponent
    ],
    imports: [
        BrowserModule,
        SmNgDclModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

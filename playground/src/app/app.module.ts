import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SampleModule} from 'angular-example-library';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SampleModule.forRoot({
      config: {
        say: 'hello'
      }
    })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

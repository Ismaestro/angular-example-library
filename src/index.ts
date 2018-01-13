import {APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export const OPTIONS = new InjectionToken<string>('OPTIONS');

export interface SampleModuleOptions {
  config: {}
}

export function initialize(options: any) {
  console.log('Angular library has started with this options: ', options);
  return function () {
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(options?: SampleModuleOptions): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [
        {provide: OPTIONS, useValue: options},
        {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          deps: [OPTIONS],
          multi: true
        },
        SampleService
      ]
    };
  }
}

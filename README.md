# Example library with Angular 5 + Angular CLI playground

> ### Base project made with much  :heart: . Contains example library, playground demo, tests etc.

[![GitHub forks](https://img.shields.io/github/forks/ismaestro/angular-example-library.svg?style=social&label=Fork)](https://github.com/ismaestro/angular-example-library/fork)
[![GitHub stars](https://img.shields.io/github/stars/ismaestro/angular-example-library.svg?style=social&label=Star)](https://github.com/ismaestro/angular-example-library)

## Features
* Sample component, service, directive and pipe
* Unit tests with Karma and Jasmine
* Playground with Angular CLI to test the library in a 'real application'
* Linting
* Automatic versioning
* Documentation

## Usage

**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

`npm i` - Installs project modules

`npm run install-all` - Installs project modules and playground modules

`npm run clean` - Removes every generated folder

`npm run build` - Builds the library using gulp

`npm run build:watch` - Builds the library using gulp waiting for changes

`npm run docs` - Generates all the documentation

`npm start` - Runs the playground and the build process waiting for changes

`npm run link` - Links the library folder in order to use it in the playground with npm link

`npm run playground` - Runs the playground (maybe you have to use sudo or have permissions)

`npm run test` - Runs the tests with karma and jasmine

`npm run test:watch` - Runs the tests with karma and jasmine waiting for changes

`npm run lint` - Runs the linter

## Modify this project and make your own angular library

Just in three steps:

1. Rename every occurrence of 'angular-example-library' to 'your-library-name'.
2. Modify src folder according to your need.
3. `npm run build`

## Release

To release a new version of this library and publish it to npm, run:

```bash
$ npm run release
```

Remember to login in npm. The script (release.sh) will publish your dist folder.

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install your-library-name
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import your library
import { YourLibraryModule } from 'your-library-name';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    YourLibraryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Once your library is imported, you can use its components, directives and pipes in your Angular application.

## Contributing
- Please see the CONTRIBUTING file for guidelines.
- Create **pull requests, submit bugs, suggest new features** or documentation updates :wrench:

## License

MIT

Enjoy :metal:

We are always happy to hear your feedback!

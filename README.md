<p align="center">
  <h1 align="center">Example library with Angular 5 + Angular CLI playground</h1>

  <p align="center">
    Angular example library that can serve as base project if you want to build your own library 
    <br>
    <a href="https://github.com/Ismaestro/angular-example-library/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://github.com/Ismaestro/angular-example-library/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</p>

**Deprecated** This project is no longer maintained. If you want to create an angular library, check [this](https://github.com/angular/angular-cli/wiki/stories-create-library).

## Table of contents

- [Features](#features)
- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Features

* Sample component, service, directive and pipe
* Unit tests with Karma and Jasmine
* Playground with Angular CLI to test the library in a 'real application'
* Linting
* Automatic versioning
* Documentation

## Quick start

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

Modify this project and make your own angular library:

Just in three steps:

1. Rename every occurrence of 'angular-example-library' to 'your-library-name'.
2. Modify src folder according to your need.
3. `npm run build`

To release a new version of this library and publish it to npm, run:

```bash
$ npm run release
```

Remember to login in npm. The script (release.sh) will publish your dist folder.

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

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Ismaestro/angular-example-library/blob/master/CONTRIBUTING.md) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Ismaestro/angular-example-library/issues/new).

## Creators

**Ismael Ramos**

- <https://github.com/ismaestro>

<a href='https://ko-fi.com/S6S5LMVR' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Copyright and license

Code and documentation copyright 2011-2018 the authors. Code released under the [MIT License](https://github.com/Ismaestro/angular-example-library/blob/master/LICENSE).

Enjoy :metal:


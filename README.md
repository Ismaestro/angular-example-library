# Example library with Angular 5 + Angular CLI playground

> ### Base project made with much  :heart: . Contains example library, playground demo, tests etc.

[![GitHub forks](https://img.shields.io/github/forks/ismaestro/angular-example-library.svg?style=social&label=Fork)](https://github.com/ismaestro/angular-example-library/fork)
[![GitHub stars](https://img.shields.io/github/stars/ismaestro/angular-example-library.svg?style=social&label=Star)](https://github.com/ismaestro/angular-example-library)

## Features
* Sample component, service, directive and pipe
* Unit tests with Karma and Jasmine
* Playground with Angular CLI
* Automatic versioning
* Documentation

## Usage

**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

`npm i` - Installs everything needed

"clean": "rm -Rf dist node_modules playground/node_modules",
    "install-all": "npm i; cd playground; npm i",
    "start": "concurrent \"gulp\" \"npm run playground\"",
    "build": "gulp build",
    "build:watch": "gulp",
    "docs": "npm run docs:build",
    "docs:build": "compodoc -p tsconfig.json -n angular-example-library -d docs --hideGenerator",
    "docs:serve": "npm run docs:build -- -s",
    "docs:watch": "npm run docs:build -- -s -w",
    "link": "cd dist; npm link; cd ../playground; npm link angular-example-library;",
    "playground": "npm run link && cd playground; ng serve --preserve-symlinks",
    "test": "tsc -p src/tsconfig.spec.json && karma start karma.conf.js --single-run",
    "test:watch": "concurrent \"tsc -p src/tsconfig.spec.json -w\" \"karma start karma.conf.js\"",
    "lint": "tslint --type-check --project tsconfig.json src/**/*.ts",
    "release:patch": "npm run lint && tools/release.sh patch",

## Modify this project and make your own angular library

Just in three steps:

1. Rename every occurance of 'angular-example-library' to 'your-library-name'.
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

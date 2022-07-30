<p align="center">
  <a href="https://www.nytimes.com/">
    <img alt="Gatsby" src="https://mwcm.nyt.com/.resources/mkt-wcm/dist/libs/assets/img/logo-nyt-header.svg" width="400" />
  </a>
</p>

<h1 align="center">
  New York Times Articles App
</h1>

A simple app to hit the NY Times Top Stories API and show a list of news and articles, that shows details when items on the list are tapped (a typical master/detail app).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## 🚀 Quick start

## Local JWT server

This project use this [repository](https://github.com/techiediaries/fake-api-jwt-json-server) as a local serve. To start the project check below:

### Install Server and App

```bash
$ npm install
$ npm run start-auth
```

## App Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Generate code coverage report

To generate a coverage report run the following command in the root of the project.

```bash
$ npm run test-coverage
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Lint

Run `ng lint` to lint the project.

## Documentation

Run `npm run compodoc:serve` to see the documentation via [compodoc](https://compodoc.app/)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.

    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── .eslintrc.json
    ├── angular.json
    ├── karma.conf.js
    ├── tsconfig.json
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`angular.json`**: The root level of an Angular workspace provides workspace-wide and project-specific configuration defaults for build and development tools provided by the Angular CLI. Path values given in the configuration are relative to the root workspace folder.

6.  **`tsconfig.json`**: The tsconfig. json file specifies the root files and the compiler options required to compile the project.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

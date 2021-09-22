# CodebossAngularLibs

https://medium.com/angular-in-depth/release-management-in-angular-with-lerna-21b4ab417c59

## Init

> ng new codeboss-angular-libs --create-application=false

> cd codeboss-angular-libs 

> npm i lerna -g

> lerna init -i

## Create Library

> ng g lib button-lib

Add to library `package.json`:

```
  "publishConfig": {
    "access": "public"
  }
```

## Building

Build specific

> ng build --project mat-generic-table

Build all libraries

> lerna run build

## Running playground demo

> ng serve --project playground-app

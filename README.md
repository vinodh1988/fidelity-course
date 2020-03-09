# Angular

Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages

### Benefits

* Component-based architecture that provides a higher quality of code
* Uses TypeScript: better tooling, cleaner code, and higher scalability
* Uses RxJS: efficient, asynchronous programming
* Aims at providing High performance
* Easy to Update with angular CLI

## Getting Started

### Angular CLI installation and creating new application

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications. You can use the tool directly in a command shell, or indirectly through an interactive UI such as Angular Console.

### Installing Angular CLI
Major versions of Angular CLI follow the supported major version of Angular, but minor versions can be released separately.

### Install the CLI using the npm package manager:

```
npm install -g @angular/cli
```

To create a new angular app run

```
   ng new courseapp
```

### angular project structure

Angular applications scaffolded by angular CLI will have the following structure

WORKSPACE CONFIG  |	PURPOSE
------------------|-------------------
.editorconfig	| Configuration for code editors. See EditorConfig.
.gitignore	| Specifies intentionally untracked files that Git should ignore.
README.md |	Introductory documentation for the root app.
angular.json |	CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as TSLint, Karma, and Protractor. For details, see Angular Workspace Configuration.
package.json |	Configures npm package dependencies that are available to all projects in the workspace. See npm documentation for the specific format and contents of this file.
package-lock.json |	Provides version information for all packages installed into node_modules by the npm client. See npm documentation for details. If you use the yarn client, this file will be yarn.lock instead.
src/	|Source files for the root-level application project.
node_modules/	| Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.
tsconfig.json	| Default TypeScript configuration for projects in the workspace.
tslint.json |	Default TSLint configuration for projects in the workspace


## Angular Building Blocks

### Modules

A module is a container for a group of related components. Every angular app has at least one module which we call app module. As our application grows, we may want to break our modules into smaller, more maintainable modules. And as the application grows, we need to divide our app module into sub smaller modules and each module is responsible for a specific section. It has related components inside them.

The module details will usually be in file called app.module.ts

###  Component

Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.

Components are like the basic building block in an Angular application. Components are defined using the @component decorator. A component has a __selector, template, style and other properties__, using which it specifies the metadata required to process the component.

#### Creating component using cli

To create a component using cli use the following command

```
ng g c course
```

After component creation , it appears like this

```

import { Component, OnInit, Input } from '@angular/core';
import { course } from 'src/app/model/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 @Input('course') current:course;
  constructor() { }

  ngOnInit(): void {
  }


}

```

### Directives


#### Directives overview
There are three kinds of directives in Angular:

* __Components—directives__ with a template.
* __Structural directives__—change the DOM layout by adding and removing DOM elements.
* __Attribute directives__—change the appearance or behavior of an element, component, or another directive.

__Components__ are the most common of the three directives. You saw a component for the first time in the Getting Started tutorial.

__Structural Directives__ change the structure of the view. Two examples are NgFor and NgIf. Learn about them in the Structural Directives guide.

__Attribute directives__ are used as attributes of elements. The built-in NgStyle directive in the Template Syntax guide, for example, can change several element styles at the same time.

__Component Directive__

  Component is the most common of the directives. In fact every component itself is
  a component directive.

__Structural Directive__

  Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.

As with other directives, you apply a structural directive to a host element. The directive then does whatever it's supposed to do with that host element and its descendants.

Structural directives are easy to recognize. An asterisk (*) precedes the directive attribute name as in this example.

for exmple

```
   <li *ngFor="let x of courses">{{x}}</li>
```
 
 assume courses=["Java","C++","SQL"];

 The above code will generate three li with Java,SQL and C++

 ```
    <div *ngIf="show"> </div>
 ```

    The division will be shown if and only if show is true

### Attribute Directives

  Attribute directives changes the behaviour of the target element

  Attribute directives are further classified 

   * Input Directives
   * Output Directives
   * Input Output Directives
  
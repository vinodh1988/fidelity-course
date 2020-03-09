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

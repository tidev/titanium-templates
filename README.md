# Titanium Project Templates

Welcome to the official Titanium SDK project templates!

These templates are used to create new projects via the Titanium CLI. Each template is published to npm.

> Note: These templates require Titanium CLI v6.0.0 or newer.

## Usage

The Titanium comes bundled with "Alloy" and "Classic" project templates.

```sh
ti new --template app-alloy # default template

ti new --template app-classic
```

For the other templates, the Titanium CLI will install them from npm.

```sh
ti new --template @titanium-sdk/template-app-angular
```

## Official Templates

### Apps

| Name        | Package |
| ----------- | ------- |
| Alloy App   | [@titanium-sdk/template-app-alloy](https://www.npmjs.com/package/@titanium-sdk/template-app-classic) |
| Angular App | [@titanium-sdk/template-app-angular](https://www.npmjs.com/package/@titanium-sdk/template-app-classic) |
| Classic App | [@titanium-sdk/template-app-classic](https://www.npmjs.com/package/@titanium-sdk/template-app-classic) |
| Vue.js App  | [@titanium-sdk/template-app-vue](https://www.npmjs.com/package/@titanium-sdk/template-app-vue) |

### Modules

| Name          | Package |
| ------------- | ------- |
| Native Module | [@titanium-sdk/template-module-native](https://www.npmjs.com/package/@titanium-sdk/template-module-native) |

### Other

| Name            | Package |
| --------------- | ------- |
| Apple Watch App | [@titanium-sdk/template-watch-app](https://www.npmjs.com/package/@titanium-sdk/template-watch-app) |

## Legal

This project is open source under the [Apache Public License v2][1] and is developed by
[Axway, Inc](http://www.axway.com/) and the community. Please read the [`LICENSE`][1] file included
in this distribution for more information.

[1]: https://github.com/appcelerator/titanium-templates/blob/master/LICENSE

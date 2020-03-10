# Titanium Angular App

Welcome to your new project!

## Quick start

To build your app, run the Titanium CLI "build" command.

	ti build -p android

	ti build -p ios

## Project Overview

```sh
.
├─ app/
│  ├─ assets/
│  │  └─ images/
│  │     └─ angular.png
│  ├─ platform/                   # Native platform specific files
│  │  ├─ android/
│  │  │  ├─ res/
│  │  │  │  └─ values/
│  │  │  │     ├─ colors.xml
│  │  │  │     └─ styles.xml
│  │  │  └── AndroidManifest.xml  # Android SDK settings
│  │  └─ ios/
│  │     └─ Info.plist            # iOS SDK settings
│  ├─ src/
│  │  ├─ app.component.html
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ main.aot.ts
│  │  └─ main.ts
│  ├─ vendor/
│  │  └─ vendor.js
│  ├─ package.json
│  ├─ tsconfig.aot.json
│  ├─ tsconfig.json
│  └─ webpack.config.js
├─ hooks/
│  └─ pre-compile.js              # Titanium CLI v5 hook plugin
├─ .gitignore                     # File patterns to exclude from git version control
├─ DefaultIcon.png                # An icon used to generate icons
├─ package.json                   # npm manifest for registering dependencies
├─ README.md
└─ tiapp.xml                      # Titanium project settings
```

## Documentation

For more information:

 * [Titanium & Angular Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_and_Angular)
 * [Titanium SDK Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK)
   * [Getting Started](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_Getting_Started)
   * [Welcome To Titanium!](https://docs.appcelerator.com/platform/latest/#!/guide/Welcome_To_Titanium!)
   * [Example Applications](https://docs.appcelerator.com/platform/latest/#!/guide/Example_Applications)
 * [Titanium API](https://docs.appcelerator.com/platform/latest/#!/api/Titanium)

## Getting Help

If you have questions, feel free to reach out on [TiSlack](https://ti-slack.slack.com/) or
[Stack Overflow](https://stackoverflow.com/tags/appcelerator).

If you stumble across a bug, please open a [JIRA ticket](https://jira.appcelerator.org/) and let us know!

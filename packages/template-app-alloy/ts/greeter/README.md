# Titanium Alloy App

Welcome to your new project!

## Quick Start

To build your app, run the Titanium CLI "build" command.

	ti build -p android

	ti build -p ios

## Project Overview

```sh
.
├─ .vscode/                       # Visual Studio Code editor settings
├─ app/
│  ├─ assets/
│  ├─ controllers/
│  ├─ lib/
│  ├─ platform/
│  │  ├─ android/
│  │  │  ├─ res/
│  │  │  └─ AndroidManifest.xml   # Android SDK settings
│  │  └─ ios/
│  │     └─ Info.plist            # iOS SDK settings
│  ├─ styles/
│  ├─ views/
│  ├─ alloy.ts
│  ├─ config.json
│  └─ globals.d.ts
├─ hooks/
│  └─ pre-compile.js              # Titanium CLI v5 hook plugin
├─ .gitignore                     # File patterns to exclude from git version control
├─ DefaultIcon-ios.png            # An icon used to generate icons for iOS build
├─ DefaultIcon.png                # An icon used to generate icons
├─ iTunesConnect.png              # An icon used to generate icons
├─ package.json                   # npm manifest for registering dependencies
├─ README.md
├─ tiapp.xml                      # Titanium project settings
└─ tsconfig.json                  # TypeScript compiler settings
```

## Documentation

For more information:

 * [Alloy Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Alloy_Framework)
 * [Titanium SDK Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK)
	 * [Getting Started](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_Getting_Started)
	 * [Welcome To Titanium!](https://docs.appcelerator.com/platform/latest/#!/guide/Welcome_To_Titanium!)
	 * [Example Applications](https://docs.appcelerator.com/platform/latest/#!/guide/Example_Applications)
 * [Titanium API](https://docs.appcelerator.com/platform/latest/#!/api/Titanium)

## Getting Help

If you have questions, feel free to reach out on [TiSlack](https://ti-slack.slack.com/) or
[Stack Overflow](https://stackoverflow.com/tags/appcelerator).

If you stumble across a bug, please open a [JIRA ticket](https://jira.appcelerator.org/) and let us know!

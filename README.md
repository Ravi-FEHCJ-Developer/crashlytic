# capacitor-firebase-plugin-demo

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/robingenz/capacitor-firebase-plugin-demo/CI/main)](https://github.com/robingenz/capacitor-firebase-plugin-demo/actions)

<!-- [![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/robingenz/capacitor-firebase-plugin-demo?color=brightgreen&label=version)](https://github.com/robingenz/capacitor-firebase-plugin-demo/releases) -->

⚡️ Simple Ionic Angular app to demonstrate the use of certain Capacitor plugins.

## Plugins

The following plugins are included:

- [robingenz/capacitor-firebase-app](https://github.com/robingenz/capacitor-firebase-app)
- [robingenz/capacitor-firebase-performance](https://github.com/robingenz/capacitor-firebase-performance)
- [capacitor-community/firebase-crashlytics](https://github.com/capacitor-community/firebase-crashlytics)

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)

### Getting Started

Clone this repository:

```
git clone https://github.com/robingenz/capacitor-firebase-plugin-demo.git
```

Change to the root directory of the project:

```
cd capacitor-firebase-plugin-demo
```

Install all dependencies:

```
npm i
```

Prepare and launch the Android app:

```
npx ionic cap sync android
npx ionic cap run android
```

Prepare and launch the iOS app:

```
npx ionic cap sync ios
npx ionic cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

<!-- ## Changelog

See [CHANGELOG.md](https://github.com/robingenz/capacitor-firebase-plugin-demo/blob/main/CHANGELOG.md). -->

## License

See [LICENSE](https://github.com/robingenz/capacitor-firebase-plugin-demo/blob/main/LICENSE).

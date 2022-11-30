## MINIMART

The main goal of this application is to use github actions workflow to automatically build and deploy on a react native shopping application using EAS build pipeline.

<div align="center">
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react native">
  <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" alt="expo">
</div>

---

## Table of Contents

- [The app and its features](#the-app-and-its-features)
- [The codebase and how it works](#the-codebase-and-how-it-works)
- [Libraries used](#libraries-used)
- [Features to be added](#features-to-be-added)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

---

## The app and its features

This idea behind this app is to build a simple mini shopping app, with just only one interface, In this interface the user can delete and also also reset an item. The main purpose of this app is to allow github actions which can be used to automatically deploy and build and app without going throught the long process of generating apk builds and all which takes time.

---

## The codebase and how it works

All folders are placed under the minimart app folder which is the parent folder. This parent folder houses all the folders in the app. The key reason is for anybody to easily navigate to a particular file without being easily confused.

- The components folder is used to store components used of the app
- The workflow folder which holds the github actions
- The app.js file is the parent file that runs in the app

---

## Libraries used

- uuid: I used the uuid to generate an id on the items
- react-native-get-random-values: To run a uuid this library needs to be installed

---

## Features to be added

Likely going to add a theme, textinput to add new value/item

---

## Usage

Clone the app and in your terminal input git clone with github url, when it is done. Do the following

```
$ yarn install
$ yarn start
```

---

## License:

Licensed under the [MIT](https://github.com/Davidon4/Minimart/blob/development/LICENSE).

---

## Author:

[Juggernaut.dev](https://github.com/Davidon4)

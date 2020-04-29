## This project is not recommend for learning anymore. Because I made this before React Native 0.60.x, for new best practice please check [github.com/libscode/CovidLibs](https://github.com/libscode/CovidLibs)

# Simple CRUD App Using React-Native
This is	Simple CRUD App including React Navigation, Nativebase and Axios. You can create, update, and delete data with this app. For the backend I'm using expressjs and mysql as database.

[![MIT License][license-image]][license-url] [![Stars][stars-image]][stars-url] [![js-standard-style][js-standard]][js-standard-url] [![React Native][package-react-native]][react-native-url]

## Prerequisites
- JDK 1.8
- Node >= 8.*
- react-native-cli
- mysql

## Database Table
| column | type |
| --- | --- |
| id | int(11) PRIMARY AI |
| name | varchar(200) |
| email | varchar(200) |
| phone | varchar(200) |

## Installation
open terminal and change directory to your desired folder, then:
```
$ git clone https://github.com/DeVoresyah/RN-Crud YourAppName
$ cd YourAppName
$ npm install
```

## Running Your App
Make sure you server and mysql already running, then run the app
```
$ react-native run-android
or
$ react-native run-ios
```

## Code You Need to Change
You need change some code in these files:
```
/src/Contact/components/ContentSection.js
/src/Contact/components/FormAdd.js
/src/Contact/components/FormUpdate.js
```

## Find me
You can find me on social media xD
- [Facebook][facebook]
- [Instagram][instagram]
- [Linkedin][linkedin]

and also [Fiverr][fiverr]

## License
The code is available at [GitHub][home] under the [MIT license][license].

[home]: https://github.com/DeVoresyah/RN-Crud
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: http://revolunet.mit-license.org
[facebook]: https://facebook.com/DeVoresyah
[instagram]: https://instagram.com/devoresyah
[linkedin]: https://linkedin.com/in/devoresyah
[fiverr]: https://www.fiverr.com/devoresyah

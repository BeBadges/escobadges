[![Build Status](https://travis-ci.org/BeBadges/escobadges.svg?branch=master)](https://travis-ci.org/BeBadges/escobadges)
# EscoBadges.eu

> A Badge Designer forked from the [Skillid Project](https://github.com/oSoc17/skillid) of Team Domino during [Open Summer of Code 2017 - #oSoc17](http://2017.summerofcode.be/).


## About

EscoBadges is a web application for designing and issuing [Open Badges](https://openbadges.org/) .
Via API connection the [ESCO](https://ec.europa.eu/esco/portal/home) skills pillar can be accessed and the visual design of the badge is constructed based on the selected skill of ESCO & the logo of the issuer.
This way the process of building a visual attractive, standardized badge is very easy and without the need for a designer.

To build a badge, the builder just needs the user to enter some basic data, select the skill with our ESCO search field and press Enter. And that’s it. 
As a company, you can opt for adding your brand to the badge, with your colors and logo.

Once your badge is build, you can issue this badge or send it out to be endorsed after it has been issued.



## Build Setup

Escobadges is developed using the [vuejs](https://vuejs.org/)-based [quasar-framework](http://quasar-framework.org/) and with help of the services of [Google Firebase](https://firebase.google.com/).

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## License (MIT)
See the LICENSE.md file for license rights and limitations (MIT).
# Yale-Harvard game ticket sales activity

## Introduction

The Yale-Harvard football game is fast approaching. Here, we're going to write some code that could power an online ticket sales application. We'll be working on just a small piece of the code: the part that fulfills ticket orders and keeps track of how many seats of each kind are available in the stadium.

## What you should learn

This activity should demonstrate to you how test driven development can be useful when there are many constraints on your code. In our problem at hand--football ticket sales--there are many constraints including the size of the stadium, the price of different tickets, etc.

## Structure of the code

This repository has the following files:
```
./README.md
./testRunner.html
./src/football.js
./tests
./tests/footballTests.js
./lib/jasmine-2.3.4
./lib/jasmine-2.3.4/boot.js
./lib/jasmine-2.3.4/console.js
./lib/jasmine-2.3.4/jasmine-html.js
./lib/jasmine-2.3.4/jasmine.css
./lib/jasmine-2.3.4/jasmine.js
./lib/jasmine-2.3.4/jasmine_favicon.png
```

The code you will write is in the `./src/football.js` and `./tests/footballTests.js` files. These files are loaded by the `./testRunner.html` file, which you can open in your browser just like any other HTML file. When you open the `./testRunner.html` file, it will run the tests that we've written (and that you will write) in the `./tests/footballTests.js` file. These tests ensure the code in `./src/football.js` is working how you expect it to: that it is fulfilling requests for tickets, not overselling the tickets, giving people appropriate discounts, etc.


## Caveats

In order to keep this code easy to understand, we avoided some more advanced techniques you might see in JavaScript (or programming in general). So, the code you see here is not necessarily the best way to approach this problem. Instead, it is the most clear for our activity today.

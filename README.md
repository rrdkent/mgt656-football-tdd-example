# Yale-Harvard game ticket sales activity

## Introduction

The Yale-Harvard football game is fast approaching. Here, we're going to write some code that could power an online ticket sales application. We'll be working on just a small piece of the code: the part that fulfills ticket orders and keeps track of how many seats of each kind are available in the stadium.

![Yale Bowl](https://raw.githubusercontent.com/yale-mgt-656/mgt656-football-tdd-example/images/yale-bowl.jpg)

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

## Constraints

The ticket sales for the game should work as follows:

* *The ticket booth has 1,000 seats available at first, 500 of which are in section A and 500 of which are in section B.*
* *Tickets in section A have a much better view and cost $50. Tickets in section B are $30.*
* *Yale College students get a 50% discount on all ticket purchases.*
* The ticket booth will fulfill ticket orders if they cannot be fulfilled in full.
* Students can only order one kind of ticket at a time.
* (**stretch**) *SOM has reserved a block of 100 B seats for its students that are available at a 50% discount. But, once they're gone, they're gone. These tickets cannot be purchased by anybody except SOM students.*

## Your task

We'll be working with some code for this assignment.  You're welcome
to use a new node.js project on cloud9, or work locally on your machine if you prefer.  The
instructions will assume you're using cloud9.

You're going to be altering `football.js` to reflect the requirements articulated above. There is a function in that code called `placeTicketOrder` which is called on each order, and updates
the ticket booth's availability.

There are some tests to get you started.  You will want to add more in the file `./tests/footballTests.js` to ensure you satisfy the constraints.  The constraints
above that are written in *italics* do not have test cases written yet.


## Detailed instructions

The instructions below lay out how to get through this activity.  In case you have any issues,
here's some more reference and examples on the testing we will use.

[Jasmine Reference](http://jasmine.github.io/2.3/introduction.html)

As always, grab us if there's any issues!

### Setting up cloud9

To get started on cloud9, log into your account at <a href="https://c9.io" target="_blank">cloud9</a>.

- Create a new workspace.  In the field `Clone from Git or Mecurial URL`, enter the value:
  `https://github.com/yale-mgt-656/mgt656-football-tdd-example.git`.
- Leave the template selection as `Custom`.
- Press `Create workspace`.

You now have your cloud9 workspace setup with the project.  Take a look through
the `README.md` file (this file).

### Viewing test failures and passing your first test.

- To view which tests are passing and failing, we must open the `testRunner.html` file.
- To do this in cloud9, right click it in the file list on the right side of your screen (*workspace*),
  and press `Preview`.
- Now, you can view which tests are failing.  First, we will address the test
  "should cost $50 for seats in A, $30 for seats in B".
- Edit the code in `football.js` to pass this test.  When it is passing,
  it will disappear from the red list on the test runner page.  To update the page,
  make sure you press the **refresh button** (the counter-clockwise arrow).

### Writing your first test.

- Go to line `26` of `footballTests.js`.  You'll notice there is a *TODO* item
  here in the test `should have 500 seats in A, 500 in B`.
- Write a test here that ensures that section **A** and **B** both contain **500**
  seats initially.
- The test should be failing on the test runner page.
- Now, adjust the code in `football.js` to make it pass.

### Yale college students should be half price

- Complete the test to assert that Yale College students can purchase discounted tickets,
  in both sections.
- Update `football.js` to properly handle this.

If you've reached this point, you're doing great!  We've just practiced three examples of
TDD.

There's one final stretch component of the exercise.  As described above, we want
SOM students to be able to purchase tickets from a reserved section in B.  This has not yet
been implemented.  It's up to you to do so!  We've started you off with some test TODOs in the
stretch section of `footballTests.js`.  Write these tests first, then implement the reservation
system in `football.js`.

### Finished?  Let's check!

Ask a TA for the link to the reference test script.  Once you have the link,
you can download and run it as follows, to make sure your code and tests are complete.

1. In the **cloud9 console** write `cd ~/workspace/tests`.  This will move you to the directory
   with the test code.
2. Enter `wget <URL>` where `<URL>` is the link the TAs have given you.
3. Now, open `testRunner.html` in the **cloud9 editor** (double click it).  Look for a line like:
```html
<!-- include spec files here... -->
<script src="tests/footballTests.js"></script>
```
4. Change this line to:
```html
<!-- include spec files here... -->
<script src="tests/footballTestsComplete.js"></script>
```
5. Look at `testRunner.html` to make sure you pass everything!

## Caveats

In order to keep this code easy to understand, we avoided some more advanced techniques you might see in JavaScript (or programming in general). So, the code you see here is not necessarily the best way to approach this problem. Instead, it is the most clear for our activity today.

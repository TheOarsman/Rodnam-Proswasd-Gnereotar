# Rodnam-Proswasd-Gnereotar

[Rodnam Proswasd Gnereotar](https://theoarsman.github.io/Rodnam-Proswasd-Gnereotar/)

## Overview

This page displays Challenge #3 for our <a href="https://bootcamp.msu.edu/coding/">Coding Bootcamp</a> course.

The task was to create a Random Password Generator. Reading the title of this repository may seem odd and misspelled. However, it was done purposefully. Long story short, humans read words as a whole rather than individual letters. So, as long as the first and last letters are in the correct space, the order of the remaining letter don't matter. You will still be able to read the word. Yeah, I'm a little goofy.

## Criteria for this assignment

* Promps appear when "Generate Password" is clicked
* Throughout the promps you select which attributes you want in your password
* When prompts are answered their input should be validated
* Must be no less than 8, and no more than 128, characters in length
* Must have the following characters:
  * Numeric
  * Special
  * Upper Case
  * Lower Case
* Once all prompts are answered a password is generated matching the selected criteria
* The generated password is displayed on the page

## Code Example

Here are two examples I used within my script.js to determine what characters could be used, and also to create a threshold for the min/max number of characters.

For the JavaScript, here is the array created to specify what character options are and what each contains:

* https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar/blob/9e3f437c743e08a63aef7eec6735c6e147443dfb/script.js#L1-L4

For the threshold of characters allowed to be used, I entered the below script. One tricky part was getting it to recognize when something other than a number was entered for the quantity, and to correct the error or throw up an Alert.

* https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar/blob/9e3f437c743e08a63aef7eec6735c6e147443dfb/script.js#L12-L27



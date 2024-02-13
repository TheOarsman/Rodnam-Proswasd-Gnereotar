## Rodnam Proswasd Gnereotar

[Rodnam Proswasd Gnereotar](https://theoarsman.github.io/Rodnam-Proswasd-Gnereotar/)

<img src="assets/images/PsswrdGnrtr.png" width="500" height="350" alt="Password Generator"><br>

<img src="assets/images/length.jpeg" width="375" height="175" alt="Length Prompt"><br>

<div style="display: flex; justify-content: space-between;">
    <img src="assets/images/special.jpeg" width="375" height="110" alt="Special Characters Prompt">
    <img src="assets/images/upper.jpeg" width="375" height="110" alt="Upper Case Prompt">
</div><br>
<div style="display: flex; justify-content: space-between;">
    <img src="assets/images/lower.jpeg" width="375" height="110" alt="Lower Case Prompt">
    <img src="assets/images/numeric.jpeg" width="375" height="110" alt="Numeric Prompt">
</div>

## Description

This page displays Challenge #3 for our <a href="https://bootcamp.msu.edu/coding/">Coding Bootcamp</a> course.

The task was to create a Random Password Generator. Reading the title of this repository may seem odd and misspelled. However, it was done purposefully. Long story short, humans read words as a whole rather than individual letters. So, as long as the first and last letters are in the correct space, the order of the remaining letter don't matter. You will still be able to read the word. Yeah, I'm a little goofy.

When started, a series of prompts appear asking what you like like as the criteria for your password:<br>

- Length 8-128 characters
- Special Characters
- Lower/Upper Case Letters
- Numerics<br>

Based on your selections, a random password will be generated for you!

## Table of Contents

- [Rodnam Proswasd Gnereotar](#Rodnam-Proswasd-Gnereotar)<br>
- [Description](#description)<br>
- [Table of Contents](#tabel-of-contents)<br>
- [User Story](#user-story)<br>
- [Acceptance Criteria](#acceptance-criteria)<br>
- [Code Example](#code-example)<br>
- [Development](#development)<br>
- [Usage](#usage)<br>
- [Technologies](Technologies)
- [License](#license)<br>
- [Contributing](#contributing)<br>
- [Tests](#tests)<br>
- [Resources](#resources)<br>
- [Questions/Contact](#questionscontact)

## User Story

**AS AN** employee with access to sensitive data<br>

**I WANT** to randomly generate a password that meets certain criteria<br>

**SO THAT** I can create a strong password that provides greater security<br>

## Acceptance Criteria

**GIVEN** I need a new, secure password<br>

**WHEN** I click the button to generate a password<br>
**THEN** I am presented with a series of prompts for password criteria<br>

**WHEN** prompted for password criteria<br>
**THEN** I select which criteria to include in the password<br>

**WHEN** prompted for the length of the password<br>
**THEN** I choose a length of at least 8 characters and no more than 128 characters<br>

**WHEN** asked for character types to include in the password<br>
**THEN** I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters<br>

**WHEN** I answer each prompt<br>
**THEN** my input should be validated and at least one character type should be selected<br>

**WHEN** all prompts are answered<br>
**THEN** a password is generated that matches the selected criteria<br>

**WHEN** the password is generated<br>
**THEN** the password is either displayed in an alert or written to the page

## Code Example

Here are two examples I used within my script.js to determine what characters could be used, and also to create a threshold for the min/max number of characters.

For the JavaScript, here is the array created to specify what character options are and what each contains:

`` const specialCaseOptions = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; ``<br>
`const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"`<br>
`const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"`<br>
`const numericOptions = "0123456789"`<br>

For the threshold of characters allowed to be used, I entered the below script. One tricky part was getting it to recognize when something other than a number was entered for the quantity, and to correct the error or throw up an Alert.<br>

<img src="assets/images/passwordLengthSnip.png" width="500" height="275" alt="passwordLength Function"><br>

## Development

Future development plans:<br>

- Replace multiple prompts with one prompt consisting of multiple check boxes

## Usage

N/A

## Technologies

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

## License

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

MIT License

Copyright 2024 Heinz Ulrich V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

N/A

## Tests

None currently

## Resources

None

## Questions/Contact

**Developer:** Heinz Ulrich V

[![Gmail](assets/images/badges/GMAILBadge.png)](mailto:heinzulrichv@gmail.com)<br>

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/TheOarsman)<br>

[![YouTube](assets/images/badges/YouTubeBadge.png)](https://www.youtube.com/@theoarsman4581)<br>

[![LinkedIn](assets/images/badges/LinkedInBadge.png)](https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/)

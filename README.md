![JumboCode Logo](./media/icon.png)
[![Travis badge](https://travis-ci.org/JumboCode/jumbocode-website-overhaul.svg?branch=master)](https://travis-ci.org/JumboCode/jumbocode-website-overhaul)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# JumboCode Website

> A redesigned JumboCode webite, built on Gatsby.

### [Demo Website](https://jumbocode.netlify.com/)

## Development

1. `yarn install`
2. `gatsby develop`

& Have fun.

# Cypress Tutorial

### Getting set up

To get started with Cypress, run the following in the root directory of your project:

```
npm install cypress --save-dev
```

To run Cypress, run the following:

```
./node_modules/.bin/cypress open
```

### Cypress project structure

Cypress is a testing framework that sites on top of your project so it is agnostic
to your project's underlying implementation.

Cypress projects are broken up into four subfolders:

1. fixtures -- JSON files for providing your tests fake data
2. integration -- the test files that you run against your project using Cypress
3. plugins -- extentions that you can use to extend the functionality of Cypress
4. support -- Cypress commands and helper functions for your tests

In this tutorial, we will be focusing on writing tests in the `integration/` folder for the JumboCode website.

### Testing in general

Test generally covers 3 phases:

1. Set up the application state.
2. Take an action.
3. Make an assertion about the resulting application state.

In this tutorial, we won't be focusing on setting up application state.
Instead we will be focusing on selecting frontend elements to test functionality.
For more information on these steps, go here:
https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-your-first-test

### Writing our first test

Open `integration/site/main.js` and ensure it looks like this:

```
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
```

`describe(testSuiteName, bodyFn)` implements a Cypress Test suite and it includes
Cypress tests implemented with `it(functionalityName, bodyFn)`.

Add a test that navigates to the following page [PAGE] and selects the button [BUTTONTEXT]
using the following Cypress code:

```
cy.visit(PAGE)
cy.select('button').contains(BUTTONTEXT)
```

Add `.click()` to the Cypress code:

```
...
cy.select('button').contains(BUTTONTEXT).click()
```

Open the Cypress test runner and select the `site` folder.
Ensure a new browser tab opens and runs the tests for `site`.

### Further testing

While this test is correct, it doesn't do anything. Let's make a test that navigates
to and from different pages using buttons on the site.

Using what you know so far and a generous helping of information from the docs (https://docs.cypress.io/api/table-of-contents)
take a stab at this task, write new tests, or take a look at some of the awesome
example tests Cypress pre-loads into our project.

## License

MIT.

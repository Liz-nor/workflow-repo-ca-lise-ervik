# My Workflow project

![Node](https://img.shields.io/badge/node-20+-green)
![Tests](https://img.shields.io/badge/tests-vitest%20%7C%20playwright-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

This project demonstrates a modern JavaScript development workflow including linting, formatting, automated testing, and Git commit hooks.

The goal is to ensure consistent code quality and reliability through automated tools and tests.

# Features

---

- ESLint for code quality and linting
- Prettier for consistent code formatting
- Husky and lint-staged for pre-commit hooks
- Unit testing with Vitest
- End-to-end testing with Playwright
- Enviroment variable support for secure configuration

## Prerequisites

---

- Node.js(20+)
- npm

# Getting started:

---

1. Installation:

`npm install`

`npx playwright install`

2. Running the project:

`npm run dev`

3. Running the tests.

`npm run test`

## Environment Variables

---

Create a `.env ` file in the root directory:

```env
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

## Available Scripts

---

`npm run dev` -Start development server

`npm run build` -Build for production

`npm run test` -Run tests

`npm run lint` -Run ESlint

`npm run test:e2e` -Run Playwright end-to-end tests

## Project Structure

---

```
tests
├─ unit
│ ├─ isActivePath.test.js
│ └─ getUserName.test.js
└─ e2e
├─ login.spec.js
└─ navigation.spec.js
```

## Technologies

- ![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
- ![Static Badge](https://img.shields.io/badge/HTML-blue)
- ![Static Badge](https://img.shields.io/badge/CSS-green)
- ![Static Badge](https://img.shields.io/badge/ESlint-purple)
- ![Static Badge](https://img.shields.io/badge/Prettier-purple)

## Contact

Lise Ervik

- [LinkedIn] (https://www.linkedin.com/in/lise-ervik-9b688b237/)
- [Portfolio] (https://liz-nor.github.io/Portfolio1/)

Acknowledgement I want to thank my teachers and especially my peers for support and advice

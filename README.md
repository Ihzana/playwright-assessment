# Playwright Automation Assignment

## About This Project

This project contains end-to-end automation tests built using Playwright with TypeScript.
The main goal was to automate common user workflows such as navigation, form interactions, and UI validations on a public demo website.

---

## What I Implemented

* Navigation testing across pages
* Form submission with both valid and invalid inputs
* UI interactions (buttons, radio buttons, etc.)
* Data-driven testing using external JSON data
* Positive and negative test scenarios

---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## How to Run the Project

1. Install dependencies:

   ```
   npm install
   ```

2. Install Playwright browsers:

   ```
   npx playwright install
   ```

3. Run all tests:

   ```
   npx playwright test
   ```

4. Run tests only on Chromium:

   ```
   npx playwright test --project=chromium
   ```

---

## Project Structure

* `tests/` → Contains all test cases
* `pages/` → Page Object Model (POM) files
* `test-data/` → External test data (JSON)

---

## Approach

I followed a structured approach using the Page Object Model (POM) to keep the code clean and reusable.
Test data is separated using JSON to make tests more flexible and maintainable.
I focused on writing stable tests and handling real-world issues like dynamic elements and flaky UI behavior.

---

## Notes

* Covered multiple real-world scenarios
* Focused on readability and maintainability
* Ensured tests run successfully on Chromium

---

## Final Thoughts

This assignment helped me understand how to structure automation projects, debug issues, and write clean test cases using Playwright.

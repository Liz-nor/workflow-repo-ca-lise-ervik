In the beginning of the assignment I misunderstood the brief many times to where I had to start over several times. For some reason I thought I was not suppose to push any changes so chatGPT became a tool to understanding how to revert changes already pushed to the repo. I also had to fork the project a few times because of forgetting to make the branch the right name(also had to change the branch name at one point).
In all of this I had to use AI to check errors that ultimatly came because I had deleted files while reverting that I needed for tests to run.
I also had to check errors I was getting trying to commit or push content. For a while I thought I could add and commit several things before pushing it individually so I had to ask AI many times what I was doing wrong. The good thing about this is the fact that I now feel like I understand how it works.

## 15.03

Purpose: To compose a small text for describing the project in the readme file (used some of the learning outcomes in the brief to compose from).
Outcome: A short detail on what the project is.

## 15.03

Purpose: Structuring the readme file. Gave pointers as to what I wanted it to include and asked for tips for what else to add to make it look professional with best practice principles.

## 15.03

Purpose: Doublechecking that the termnal is showing 7 tests successfull, verifying assignment requirements are met.
Outcome: All Vitest unit tests passed.

## 15.03

Purpose: If I delete a folder locally and push, will it be removed remote aswell?
Outcome: Yes, if deletion is staged, commited and pushed.

## 14.03

Purpose: Playwright showing "describe not defined"
Outcome: Tests were incorrectly nested using test() instead of test.describe()

Purpose: Error message Vitest saying getUserName is not a function
Outcome: Syntax error as the name of the function was getUsername.

## 11.03

Purpose: Should test files be called .test.js or .spec.js
Outcome: Both are supported but .test.js mostly used for unit tests and .spec.js for e2e tests.

## 11.03

Purpose: Vitest unit tests failing with parsing and import errors
Outcome: missing .js extention in imports, incorrect import paths and missing describe import

# Assignment for Calculator CLI

**Note for Students:**

You are responsible for implementing the functionality in `calculator.js` as well as in the source modules found in `src/stmnts-01.js` (for addition, subtraction, multiplication, division, modulus) and `src/stmnts-02.js` (for power).

All tests in `tests/calculator.test.js` must pass.


Before publishing the package to NPM, **replace**:

*   `@yourname` with your actual NPM account name in the package name.
     ** Be sure to retain the `@` per NPM's scope policy as explained below.
*   `Your Name` with your real name in the author field.
*   `yourusername` with your GitHub account name.


## Steps
1. Insert code for the `stmnts-01.js` and `stmnts-01.js` files.

2. **See:** REQUIREMENTS.md file to review the requirements needed to pass the tests.

3. Implement the missing JavaScript code in `calculator.js`

4. Test

5. Lint

6. NPM Publish

## Files in This Project (the ones that will be published)

*   `calculator.js` – The main CLI script that parses arguments and calls the appropriate functions.
*   `src/` – Contains source modules:
    *   `stmnts-01.js` – Should export functions: `add`, `subtract`, `times`, `divide`, `modulus`.
    *   `stmnts-02.js` – Should export the `power` function.
*   `tests/calculator.test.js` – Contains Vitest tests to verify that your implementation works correctly.
*   `LICENSE` – The MIT License for the project.
*   `README.md` – This file.
*   `package.json` – The NPM package configuration file.


## Testing

To run the tests, execute:

```bash
npm test
```

Make sure all tests pass after you complete your implementation.

## Linting

ESLint is set up to help you maintain code quality. Run the linter with:

```
npm run lint
```

## Publishing to NPM

This project’s `package.json` is configured to include only the necessary files:

*   `calculator.js`
*   The `src/` directory
*   `LICENSE`
*   `README.md`

Once you have implemented the functionality and updated the details in `package.json` (i.e. replace `@yourname`, `yourusername`, and `Your Name`), you can login
to NPM:

```bash
npm publish
```

and publish your package with

```bash
npm publish
```

## NPM Scope

NPM Scopes provide a way to prevent package name conflicts by grouping packages under a unique namespace. When you publish a package with a scope—using the format `@yourname/package-name`—you ensure that your package's name is unique within your personal or organizational namespace.

This approach protects against accidentally using a package name that has already been claimed in the public registry. By isolating your package names with a scope, you avoid violating any existing package names and maintain clear ownership and organization within the vast NPM ecosystem.

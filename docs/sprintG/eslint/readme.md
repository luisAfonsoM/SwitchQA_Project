# Project Setup and Eslint Configuration

## Installation of Eslint

To install Eslint in your project, use the following command:

```bash
npm install eslint --save-dev
```
##  Initial Setup:
Ignore this step if already have this file in your project.
Create an ESLint configuration file (e.g., .eslintrc.js or .eslintrc.json) in your project's directory. You can create a configuration file interactively using the following command:

```bash
npx eslint --init
```

## Configuration in package.json
Add the following script to your package.json file to run Eslint with the specified configuration:

```bash
"scripts": {
  "lint": "eslint ./src --ext .ts"
}
```

## Running Eslint
After configuring Eslint, you can run the following command to lint your project:

```bash
npm run lint
```

Run the following to automatically fix fixable issues:

```bash
npm run lint -- --fix
```
## Cyclomatic complexity

How to configure the cyclomatic complexity rule in the .eslintrc.json file:

```bash
{
  "rules": {
    "complexity": ["error", 5] // Adjust the threshold value as needed
  }
}
```


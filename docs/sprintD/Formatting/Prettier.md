# Prettier Configuration Documentation

This document provides an overview of the Prettier configuration for your project, which is used to format your code consistently. We've set up specific configurations for TypeScript files in selected directories, and we've also created a `.prettierignore` file to exclude other directories from formatting.

## 1. `.prettierrc` Configuration

The `.prettierrc` configuration file defines how Prettier formats your code. In this project, we've used a top-level configuration and overrides for TypeScript files in specific directories. Here's a breakdown of the configuration:

### Top-Level Configuration

- `trailingComma: "all"`: Add trailing commas to all objects and arrays.
- `tabWidth: 2`: Use 2 spaces for indentation.
- `semi: true`: Add semicolons at the end of statements.
- `singleQuote: true`: Use single quotes for strings.
- `arrowParens": "always"`: Always include parens around arrow function args. 
- `bracketSpacing"`: true: Add spaces between brackets in objects.
- `printWidth": 100`: Wrap code lines at 100 characters.
- `useTabs": false`: Use spaces, not tabs, for indentation.

### Overrides for TypeScript Files

We've defined two overrides for some TypeScript files:

1. **Default TypeScript Files:**

   - `printWidth: 60`: Limit the line width to 60 characters to improve readability.

   [NEED TO ADD SOME BEFORE AND AFTER PICS]

## 2. `.prettierignore` File

The `.prettierignore` file is used to specify which files and directories should be excluded from Prettier formatting. We want to apply Prettier settings only to TypeScript files in specific directories. Here's how the `.prettierignore` file is configured:

- Exclude all markdown files, node_modules, build, dist, coverage, .eslintcache, and JavaScript and JSON files.
- Include TypeScript files (`*.ts`) from all directories by using `!**/*.ts`.

This `.prettierignore` file ensures that Prettier formats only the TypeScript files in the specified directories and ignores the rest.

By combining the `.prettierrc` configuration and the `.prettierignore` file, your project's code formatting remains consistent, while TypeScript files in the chosen directories receive special formatting treatment.

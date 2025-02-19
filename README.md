# React Native Type Error: Expected number but got string

This repository demonstrates a common React Native error where a component expects a numeric prop but receives a string.  The example shows how this can occur and provides a solution.

## Bug

The `Bug.js` file contains a component that expects a numeric prop (`myNumberProp`). However, a string is passed to this prop. This leads to a type error.

## Solution

The `BugSolution.js` file shows the corrected code. The string is explicitly converted to a number before being passed as a prop.  This avoids the type error and ensures correct component behavior.  This solution also includes input validation to handle cases where the string cannot be converted to a number.
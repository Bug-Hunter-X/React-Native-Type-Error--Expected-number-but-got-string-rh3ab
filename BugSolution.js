The solution involves ensuring the prop receives the correct numeric type.  Here are a few approaches:

1. **Explicit Type Conversion:** Convert the string to a number using `parseInt()` or `parseFloat()`.  Handle potential errors where the string cannot be parsed.

```javascript
const myString = "10";
const myNumber = parseInt(myString, 10); // 10

if (isNaN(myNumber)) {
  // Handle the case where the conversion failed
  console.error('Invalid number');
}

<MyComponent myNumberProp={myNumber} />
```

2. **Data Validation:** Before passing the prop, validate that it's a number or can be converted to one. This helps prevent the error in the first place. 

```javascript
const myString = "10a";
const isNumber = !isNaN(parseFloat(myString));

if (isNumber) {
  const myNumber = parseFloat(myString);
  <MyComponent myNumberProp={myNumber} />
} else {
  // Handle the case where the string is not a valid number
  console.error('Not a valid number');
}
```

3. **Type Checking (TypeScript):** If using TypeScript, define the prop type explicitly as a number. This will catch type errors during development.

```typescript
interface MyComponentProps {
  myNumberProp: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ myNumberProp }) => {
  // ...
};
```
Choose the approach that best suits your project and coding style.  Always prioritize clear and robust error handling.
---
title: Basics of JavaScript
description: A guide in my new Starlight docs site.
---

### Variables and Data Types

In JavaScript, variables are used to store data values. You can declare variables using `var`, `let`, or `const`.

#### Variable Declarations:
- `var` is function-scoped and can be re-declared and updated.
- `let` is block-scoped and can be updated but not re-declared in the same scope.
- `const` is block-scoped and cannot be updated or re-declared.

#### Example:
```javascript
// Using var
var name = "Disha";
console.log(name); // Output: Disha

// Using let
let age = 25;
console.log(age); // Output: 25

// Using const
const pi = 3.14;
console.log(pi); // Output: 3.14

// Trying to reassign a const variable will cause an error
// pi = 3.14159; // Error: Assignment to constant variable.
```

#### Data Types:
- **String**: Used for textual data.
  ```javascript
  let greeting = "Hello, World!";
  ```
- **Number**: Used for both integers and floating-point numbers.
  ```javascript
  let score = 100;
  let temperature = 36.6;
  ```
- **Boolean**: Represents `true` or `false`.
  ```javascript
  let isActive = true;
  ```
- **Null**: Represents the intentional absence of any value.
  ```javascript
  let emptyValue = null;
  ```
- **Undefined**: Represents an uninitialized variable.
  ```javascript
  let notAssigned;
  console.log(notAssigned); // Output: undefined
  ```
- **Object**: Used for complex data structures.
  ```javascript
  let person = {
    name: "John",
    age: 30
  };
  ```
- **Array**: Special type of object used to store multiple values.
  ```javascript
  let colors = ["red", "green", "blue"];
  ```

### Operators

Operators are used to perform operations on variables and values. 

#### Arithmetic Operators:
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus)
- `++` (Increment)
- `--` (Decrement)

#### Example:
```javascript
let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0

a++;
console.log(a); // Output: 11

b--;
console.log(b); // Output: 4
```

#### Comparison Operators:
- `==` (Equal to)
- `!=` (Not equal to)
- `===` (Strict equal to)
- `!==` (Strict not equal to)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)

#### Example:
```javascript
let x = 10;
let y = "10";

console.log(x == y); // Output: true
console.log(x === y); // Output: false
console.log(x != y); // Output: false
console.log(x !== y); // Output: true
console.log(x > 5); // Output: true
console.log(x < 15); // Output: true
console.log(x >= 10); // Output: true
console.log(x <= 10); // Output: true
```

#### Logical Operators:
- `&&` (Logical AND)
- `||` (Logical OR)
- `!` (Logical NOT)

#### Example:
```javascript
let isAdult = true;
let hasPermission = false;

console.log(isAdult && hasPermission); // Output: false
console.log(isAdult || hasPermission); // Output: true
console.log(!isAdult); // Output: false
```

### Conditionals (if, else, switch)

Conditional statements are used to perform different actions based on different conditions.

#### if...else Statement:
```javascript
let time = 20;

if (time < 12) {
  console.log("Good morning");
} else if (time < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// Output: Good evening
```

#### switch Statement:
```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```

### Loops (for, while, do-while)

Loops are used to execute a block of code repeatedly.

#### for Loop:
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
```

#### while Loop:
```javascript
let count = 0;

while (count < 5) {
  console.log("Count " + count);
  count++;
}

// Output:
// Count 0
// Count 1
// Count 2
// Count 3
// Count 4
```

#### do-while Loop:
```javascript
let num = 0;

do {
  console.log("Number " + num);
  num++;
} while (num < 5);

// Output:
// Number 0
// Number 1
// Number 2
// Number 3
// Number 4
```

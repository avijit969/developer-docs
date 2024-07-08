---
title: Overview
description: A guide in my new Starlight docs site.
---

## What is ECMA Script?

ECMA(European Computer Manufacturers Association) was originally founded in 1961, and its headquarters are in Geneva, Switzerland. It is a standard body of programming languages. Its most well-known standard is ECMAScript, which is the standard for JavaScript (ECMAScript is successor to JavaScript).

ECMAScript is a scripting-language specification that was developed by ECMA International in order to create a standardized JavaScript implementation across all web browsers. It is widely used for client-side scripting in web browsers, and it is also used for server-side scripting with node.js.

ECMAScript 2023 - 14th Edition is the latest version of the specification which was released in June 2023.

## Key features of ECMAScript
- Support for object-oriented programming
- Support for event-driven programming
- A rich set of built-in objects
- A standard library of functions
- Support for regular expressions
- Support for error handling

## Versions of Javascript

**ECMAScript Editions**
| Version | Name        | Release Year | Features |
| :---    |    :----:   | :----:       | :----:   |
| ES1 | ECMAScript 1 | 1997 | First edition    |
| ES2 | ECMAScript 2 | 1998 | Editorial changes |
| ES3 | ECMAScript 3 | 1999 |  - Added regular expressions<br> - Added better string handling<br> - Added new control statements<br> - Added ```try/catch``` exception handling<br> - Added tighter definition of errors<br> - Added formatting for numeric output<br> - Added and other enhancements |
| ES4 | ECMAScript 4 | Last draft 30 june 2003<br> *Never released* | Abandoned, due to political differences concerning language complexity |
| ES5 | ECMAScript 5 | 2009 | - Added "```strict``` mode"<br> - Added getters and setters<br> - Added library support for JSON<br> - Added ```String.trim()```<br> - Added ```Array.isArray()```<br> - Added Array iteration methods<br> - Allows trailing commas for object literals |
| ES5.1 | ECMAScript 5.1 | 2011 | Changes to keep the specification fully aligned with ISO/IEC |
| ES6 | ECMAScript 6 | 2015 | Added ```let``` and ```const```<br> - Added default parameter values<br> - Added ```Array.find()```<br> - Added ```Array.findIndex()```<br> - Added class declarations (```class Foo {...}```)<br> - ES6 modules like ```import * as moduleName from "...";export const Foo``` |
| ES7 | ECMAScript 7 | 2016 | Added exponential operator ```(**)```<br> - Added ```Array.includes()```<br> - Added ```await```, ```async``` keywords<br> - Added ```Array.prototype.includes``` |
| ES8 | ECMAScript 8 | 2017 | Added string padding<br> - Added ```Object.entries()```<br> - Added ```Object.values()```<br> - Added async functions<br> - Added shared memory<br> - Allows trailing commas for function parameters<br> - Added ```Object.getOwnPropertyDescriptors```<br> - Added ```String.prototype.padStart()``` |
| ES9 | ECMAScript 9 | 2018 | Added rest / spread properties ```...```<br> - Added asynchronous iteration<br> - Added ```Promise.finally()```<br> - Additions to RegExp<br>  |
| ES10 | ECMAScript 10 | 2019 | Added ```String.trimStart()```<br> - Added ```String.trimEnd()```<br> - Added ```Array.flat()```<br> - Added ```Object.fromEntries()```<br> - Optional catch binding |
| ES11 | ECMAScript 11 | 2020 | - Added ```BigInt``` primitive type<br> - The Nullish Coalescing Operator ```??``` |
| ES12 | ECMAScript 12 | 2021 | - Introduce the ```replaceAll()``` for string<br> - Added ```Promise.any()```<br> - Introduced ```AggregateError```<br> - Added logical operators ```??=```, ```&&=```, ```\|\|=``` <br> - Added ```FinalizationRegistry``` <br> - Added separators for numeric literals ```1_000``` <br> - Added ```Array.prototype.sort``` |
| ES13 | ECMAScript 13 | 2022 | - Added high level ```await``` <br> - Added static block <br> - Added ```#x in obj``` <br> - Added regular expression match indices via the ```/d``` flag<br> - Added ```cause``` property on ```Error``` objects<br> - Added ```at()``` for Strings, Arrays and TypeArrays<br> - Added ```Object.hasOwn()``` <br> - Added ```Object.prototype.hasOwnProperty()```  |
| ES14 | ECMAScript 14 | | -  Introduces the ```toSorted```, ```toReversed```, ```with```, ```findLast```, and ```findLastIndex``` methods <br>on ```Array.prototype``` and ```TypedArray.prototype```<br> - Added ```toSpliced method``` on ```Array.prototype```<br> - Added support for ```#!``` shebang comments |

<br>Usage of spread operator 
```javascript
let arr1 = [8, "avijit"]
const arr2 = [12, "disha"]

arr1 = [...arr1, ...arr2]
console.log(arr1); // [ 8, 'avijit', 12, 'disha' ]
```

## Dynamically typed
JavaScript is a dynamically-typed language. Here all type checks are performed in the runtime only, when your program is executing. This means the data types need not to be declared explicitly. You can just assign the value that you want to, to the variable and it will work.

```javascript
let a 
a = 26
console.log(a); // 26

a = "Hello Avijit!!"
console.log(a); // Hello Avijit!!

a = {'26' : 'Avijit'} // { '26': 'Avijit' }
console.log(a);
```

****Advantages:****
- Faster prototyping, because you don't care about types.
- Easier learning, because you need to learn fewer things. 


## Applications of JavaScript
- Video game
- Web application
- Web development
- Mobile app
- Server applications
- Presentations and Animation
- Data visualization
- Interactive UX
- Smartwatch apps
- Artificial intelligence and Machine learning
- Desktop apps
- Single page applications
- Building web servers and server applications
- Virtual reality
- Interactive behavior on websites
- Robots and iot
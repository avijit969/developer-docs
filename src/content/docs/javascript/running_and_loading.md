---
title: Running and Loading JavaScript
description: A guide in my new Starlight docs site.
---

# Adding JavaScript to HTML

JavaScript can be added to an HTML document in three main ways:

1. Inline JavaScript
2. Internal JavaScript
3. External JavaScript

## 1. Inline JavaScript
Inline JavaScript is written directly within an HTML tag using the onclick, onmouseover, or other event attributes.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline JavaScript Example</title>
</head>
<body>
    <button onclick="alert('Hello, world!')">Click me</button>
</body>
</html>
```
## 2. Internal JavaScript
Internal JavaScript is included within the ```<script>``` tag inside the HTML file. This method is useful for small scripts or when you want to keep the HTML and JavaScript together.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript Example</title>
    <script>
        function greet() {
            alert('Hello, world!');
        }
    </script>
</head>
<body>
    <button onclick="greet()">Click me</button>
</body>
</html>
```

## 3. External JavaScript
External JavaScript is written in a separate ```.js``` file and linked to the HTML document. This method is recommended for larger scripts and for maintaining cleaner and more modular code.

Example:

#### 1. HTML file (index.html):
```html
<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="greet()">Click me</button>
</body>
</html>
```
#### 2. JavaScript file (script.js):
```javascript
function greet() {
    alert('Hello, world!');
}
```

# Loading JavaScript
There are several methods to control how and when JavaScript is loaded in a web page:

## 1. Synchronous Loading
By default, JavaScript files are loaded synchronously, meaning the browser will halt the rendering of the page until the script is fully loaded and executed.

Example:
```html
<script src="script.js"></script>
```

## 2. Asynchronous Loading
To improve page load times, you can load JavaScript files asynchronously using the ```async``` attribute. The script will be downloaded in the background while the browser continues to render the page.

Example:
```html
<script src="script.js" async></script>
```

## 3. Deferred Loading
The ```defer``` attribute ensures that the script is executed only after the HTML document has been completely parsed. This is useful for scripts that do not need to run immediately and can wait until the page has fully loaded.

Example:
```html
<script src="script.js" defer></script>
```
# Document Object Model (DOM) Manipulation
JavaScript can interact with and manipulate the HTML content of a web page using the Document Object Model (DOM). Here is a simple example of DOM manipulation:

Example:

#### 1. HTML file (index.html):
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Example</title>
    <script src="script.js" defer></script>
</head>
<body>
    <p id="text">Original text</p>
    <button onclick="changeText()">Change Text</button>
</body>
</html>
```
#### 2. JavaScript file (script.js):
```javascript
function changeText() {
    document.getElementById('text').innerText = 'Text changed!';
}
```
# Ways to run JavaScript

JavaScript is a versatile language that can be executed in various environments. This documentation will cover the different ways to run JavaScript:

1. In the browser console
2. In Node.js
3. Via a script tag in an HTML document
4. Using an external script

## 1. Running JavaScript in the Browser Console
The browser console is a built-in developer tool available in most modern web browsers, such as Chrome, Firefox, Safari, and Edge. It allows you to execute JavaScript code directly in the browser.

### Steps to Open the Console
1. **Google Chrome:**

    - Press ```Ctrl + Shift + J``` (Windows/Linux) or ```Cmd + Option + J``` (Mac).
    - Alternatively, right-click on the webpage, select "Inspect", and go to the "Console" tab.

2. **Mozilla Firefox:**

    - Press ```Ctrl + Shift + K``` (Windows/Linux) or ```Cmd + Option + K``` (Mac).
    - Alternatively, right-click on the webpage, select "Inspect", and go to the "Console" tab.

3. **Microsoft Edge**:

    - Press ```Ctrl + Shift + I``` (Windows/Linux) or ```Cmd + Option + I``` (Mac).
    - Alternatively, right-click on the webpage, select "Inspect", and go to the "Console" tab.

4. **Safari:**

    - Press ```Cmd + Option + C.```
    - Alternatively, right-click on the webpage, select "Inspect Element", and go to the "Console" tab.
Example
```javascript
console.log('Hello, world!');
```
Type the code above into the console and press ```Enter```. You should see ```"Hello, world!"``` printed in the console.

### 2. Running JavaScript in Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.

#### Steps to Install Node.js
- Download the installer from the [Node.js website](https://nodejs.org/en).
- Run the installer and follow the setup instructions.

#### Running JavaScript Code
1. Create a JavaScript file, e.g., ```script.js```:
```javascript
console.log('Hello, world!');
```
2. Open a terminal or command prompt.
3. Navigate to the directory containing ```script.js```.
4. Run the script using the following command:
```bash
node script.js
```
You should see ```"Hello, world!"``` printed in the terminal.

### 3. Running JavaScript via a Script Tag in an HTML Document

You can run JavaScript code within an HTML document using the ```<script>``` tag. This method is commonly used for adding interactivity to web pages.

Example
```html
<!DOCTYPE html>
<html>
<head>
    <title>Script Tag Example</title>
    <script>
        console.log('Hello, world!');
    </script>
</head>
<body>
    <h1>Check the console for a message</h1>
</body>
</html>
```
Open the HTML file in a web browser and check the console for the message ```"Hello, world!"```.

### 4. Using an External Script
For better organization and maintainability, you can place your JavaScript code in an external file and link it to your HTML document.

Example
#### 1. HTML file (index.html):

```html
<!DOCTYPE html>
<html>
<head>
    <title>External Script Example</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Check the console for a message</h1>
</body>
</html>
```
#### 2. JavaScript file (script.js):

```javascript
console.log('Hello, world!');
```
Open the HTML file in a web browser and check the console for the message ```"Hello, world!"```.
<br><br>

This documentation provides an overview of running and loading JavaScript in a web page. By understanding the different methods of adding and controlling JavaScript execution, you can create dynamic and interactive web experiences. JavaScript can be run in various environments, including the browser console, Node.js, within an HTML document using the ```<script>``` tag, and via an external script file. Each method has its use cases and benefits, making JavaScript a highly flexible language for both client-side and server-side development.
---
title: Data Types
description: The python docs will coming soon.
---

Python has several built-in data types that you can use to store and manipulate data. Let's explore the most commonly used ones.

## Numbers

There are three numeric types in Python: integers, floats, and complex numbers.

### Integers

Integers are whole numbers without a decimal point.

```python
x = 10
y = -5
```

### Floats

Floats are numbers with a decimal point.

```python
pi = 3.14
g = 9.8
```

### Complex Numbers

Complex numbers are written with a "j" as the imaginary part.

```python
z = 2 + 3j
```

## Strings

Strings are sequences of characters enclosed in single, double, or triple quotes.

```python
single_quote_str = 'Hello'
double_quote_str = "World"
triple_quote_str = '''This is a 
multi-line string'''
```

You can concatenate strings using the `+` operator and repeat them using the `*` operator.

```python
greeting = single_quote_str + " " + double_quote_str  # "Hello World"
repeated_str = single_quote_str * 3  # "HelloHelloHello"
```

## Lists

Lists are ordered collections of items, which can be of different data types. Lists are mutable, meaning you can change their content.

```python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "apple", 3.14]
```

You can access list items by their index and modify them.

```python
first_fruit = fruits[0]  # "apple"
fruits[1] = "blueberry"  # ["apple", "blueberry", "cherry"]
```

## Tuples

Tuples are similar to lists but are immutable, meaning their content cannot be changed once created.

```python
coordinates = (10, 20)
single_element_tuple = (5,)
```

## Dictionaries

Dictionaries are collections of key-value pairs. Keys must be unique and immutable, while values can be of any type.

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

name = person["name"]  # "Alice"
person["age"] = 31
```

## Sets

Sets are unordered collections of unique items.

```python
fruits_set = {"apple", "banana", "cherry"}
fruits_set.add("orange")
fruits_set.remove("banana")
```

These are some of the most commonly used data types in Python. Understanding these will help you manage and manipulate data effectively.

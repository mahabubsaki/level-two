# Interview Questions Answer

- #### What is TypeScript, and how is it different from JavaScript?

TypeScript is a strongly typed superset of JavaScript which means we can write plain JavaScript code in TypeScript with some extra feature. This kind of featrue improve our code readability. It is different from JavaScript in different ways like static typing and compilation. In TypeScript types aare checked in compile time rather than runtime. TypeScript code must comiled to JavaScript to run in environment.

- #### Can you explain the difference between "interface" and "type" in TypeScript?

Interface and Type both can be used to create our own custom type but there are some slight difference between them. Types can be used to define any types but Interface must be used declare object type. We can extend interface but can't type. We can make complex type with union and intersection type.

- #### Can you give an example of how to use generics in TypeScript?

Here is an example of how to use generics in TypeScript

```sh
type generic<T> = T[];
const numberArray: generic<number> = [1, 2];
const stringArray: generic<string> = ['ab', 'cd'];
```

- #### What is the difference between an "unknown" and "any" type in TypeScript?

unknown and any type both represent any type of value. But there is a little difference between them.If we have a variable with unknown type then we can't perform any operation without type guard. If we do TypeScript compiler will give us error but in case of any type we can perform any operation and TypeScript compiler won't give us any error.This will cause runtime error.

- #### Can you give an example of how to use enums in TypeScript?

Here is an example of how to use enums in TypeScript

```sh
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound) //404
```

- #### What is the "as" keyword used for in TypeScript?

In TypeScript as keyword used to cast a type to a variable. We can tell the TypeScript compiler to treat as a different type. Sometimes if TypeScript is unknown about a we can cast it to our own type of value and tell TypeScript to treat how we want

- #### Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

"Type guards" are a way to narrow down the type of a value within a conditional block of code, based on some condition that you check at runtime. There are several ways to perform type guards in TypeScript, including using the in and typeof operators.

We can use in and typeof like this

```sh
interface Human {
  name:string;
}

interface Alien {
  id:number;
}

type Shape = Human | Alien;

function myFunc(shape: Shape): number {
  if('name' in shape){
      console.log(shape.name)
  }else{
      console.log(shape.id)
  }
}

```

```sh

function myFunc2(value: string | undefined) {
  if (typeof value === "string") {
    console.log(`parameter is string`);
  } else {
    console.log(`parameter is undefined`);
  }
}

```

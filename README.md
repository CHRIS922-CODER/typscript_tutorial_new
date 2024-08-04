![Screenshot from 2024-08-04 11-29-43](https://github.com/user-attachments/assets/f7091d1f-6ab8-4fce-a79f-5ce346bb0cdd)

### TypeScript Introduction & Setup

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static typing, classes, and interfaces.

#### Setup
1. **Install TypeScript:**
   ```sh
   npm install -g typescript
   ```

2. **Initialize TypeScript project:**
   ```sh
   tsc --init
   ```

### Compiling TypeScript

Compile a TypeScript file (`example.ts`) to JavaScript:
```sh
tsc example.ts
```

### Type Basics

Define simple types in TypeScript:
```typescript
let isDone: boolean = false;
let count: number = 10;
let name: string = "John Doe";
```

### Objects & Arrays

#### Objects
```typescript
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
```

#### Arrays
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### Explicit Types

Explicitly define types for variables:
```typescript
let id: number;
let username: string;
id = 5;
username = "user123";
```

### Dynamic `any` Types

Use `any` for dynamic types:
```typescript
let data: any = 42;
data = "A string";
data = true;
```

### Better Workflow & `tsconfig`

Customize TypeScript compilation with `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true
  }
}
```

### Function Basics

Define and call functions:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3); // 8
```

### Type Aliases

Create type aliases for complex types:
```typescript
type Point = { x: number; y: number };

let point: Point = { x: 10, y: 20 };
```

### Function Signatures

Define function signatures:
```typescript
type MathOperation = (x: number, y: number) => number;

let multiply: MathOperation = (a, b) => a * b;
```

### The DOM & Type Casting

Access DOM elements and type cast:
```typescript
const inputElement = document.getElementById("myInput") as HTMLInputElement;
inputElement.value = "Hello, World!";
```

### Classes

Define and use classes:
```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
```

### Public, Private & Readonly

Control member visibility and immutability:
```typescript
class Car {
  public brand: string;
  private speed: number;
  readonly year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
    this.speed = 0;
  }

  accelerate(amount: number): void {
    this.speed += amount;
  }
}

const myCar = new Car("Toyota", 2021);
myCar.brand = "Honda"; // Allowed
// myCar.speed = 50; // Error: private
// myCar.year = 2022; // Error: readonly
```

### Modules

Use modules to organize code:
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./math";

console.log(add(2, 3)); // 5
```

### Interfaces

Define and implement interfaces:
```typescript
interface User {
  username: string;
  age: number;
}

const user: User = {
  username: "john_doe",
  age: 25,
};
```

### Interfaces with Classes

Implement interfaces in classes:
```typescript
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area()); // 200
```

### Rendering an HTML Template

Create and render HTML templates:
```typescript
class TemplateRenderer {
  render(templateId: string, containerId: string, data: object): void {
    const template = document.getElementById(templateId)!.innerHTML;
    const rendered = this.interpolate(template, data);
    document.getElementById(containerId)!.innerHTML = rendered;
  }

  private interpolate(template: string, data: object): string {
    return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || "");
  }
}

const renderer = new TemplateRenderer();
renderer.render("template", "container", { name: "John" });
```

### Generics

Use generics for flexible types:
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");
```

### Enums

Define and use enums:
```typescript
enum Color {
  Red,
  Green,
  Blue,
}

const myColor: Color = Color.Green;
console.log(myColor); // 1
```

### Tuples

Use tuples for fixed-size arrays with known types:
```typescript
let person: [string, number];
person = ["Alice", 30];
console.log(person[0]); // Alice
console.log(person[1]); // 30
```

You can format these notes and code templates in your `README.md` for easy reference.

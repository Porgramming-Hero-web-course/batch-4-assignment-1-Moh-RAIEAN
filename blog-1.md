# The significance of union and intersection types in Typescript.

## Union type:-

### what is union type?

union type allows a variable to hold different kinds of data type in typescript. It is helpful when we want to store several type of data in a single variable. We have to use pipe symbol (|) to create an union type.

###### example:-

```tsx
const age: number | string = "21";
```

#### use cases:-

it is very useful when we wants to handle multiple data type for a variable. If we want to return different types of value from a function, we can use union type.

##### examples:-

###### example 1:-

```tsx
    let age: string | number;
    age = 21;
    age = '21 years;
```

###### example 2: returning number or string from a function:-

```tsx
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
type ReturnType = string | number | boolean;
const getPropertyValue = (obj: User, propertyName: keyof User): ReturnType =>
  obj[propertyName];
```

## intersection type:-

### what is intersection type:-

a intersection type is a type which combine multiple type into a single type. That means if we wants to create a type by combining several type, we can use intersection type. We can combine multiple types by using & operator.

###### example:-

```tsx
type User = {
  name: string;
  age: number;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;
```

### use cases:-

If we want to create a new type bassed on other type, it is a handy way to do that. sometimes we wants to extend a type as our requirements, this feature is very helpful to fullfill our requirements.

#### example:-

```tsx
type Person = {
  name: string;
  age: number;
  gender: string;
};

type Student = Person & {
  class: number;
  roll: number;
};

type Footballer = Person & {
  position: string;
  club: string;
};
```

interface Person {
    name:string;
    age?: number;
    [propName:string]:string
}

let tom:Person = {
    name: 'tom',
    age:25,
    gender: 'male'
}

// Property 'age' of type 'number' is not assignable to string index type 'string'.

// Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//  Property 'age' is incompatible with index signature.
//     Type 'number' is not assignable to type 'string'.
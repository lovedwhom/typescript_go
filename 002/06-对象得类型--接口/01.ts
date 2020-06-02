
interface Person {
    name: string;
    age: number;
}

let tom:Person ={
    name:'Yang',
    age:25
}

// let bom:Person ={
//     name:'Bom'
// }

let dom:Person ={
    name:'Bom',
    age:18,
    gender:'male',
}

// Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
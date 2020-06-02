interface Person {
    readonly id:number;
    name: string;
    age?: number;
    [propName:string]:any;
}

let tom:Person = {
    // id:8956,
    name:'tom',
    age:25,
    gender:'male'
}

tom.id=3333

// Property 'id' is missing in type '{ name: string; age: number; gender: string; }' but required in type 'Person'.
// 07.ts:2:14
//     2     readonly id:number;
//       'id' is declared here.

// 07.ts:15:5 - error TS2540: Cannot assign to 'id' because it is a read-only property.

//     tom.id=3333
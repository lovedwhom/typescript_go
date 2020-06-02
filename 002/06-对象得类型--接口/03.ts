interface Person {
    name:string;
    age?:number;
    [propName:string]:any
}

let tom:Person ={
    name:'tom',
    age: 20,
    gender: 'male',
}
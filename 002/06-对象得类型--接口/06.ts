interface Person {
    readonly id:number;
    name: string;
    age?: number;
    [propName:string]:any;
}

let tom:Person = {
    id:8956,
    name:'tom',
    age:25,
    gender:'male'
}

tom.id=3333

// Cannot assign to 'id' because it is a read-only property.
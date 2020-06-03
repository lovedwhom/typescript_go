interface Animal {
    name:string
}
interface Cat {
    name:string;
    run(): void;
}

const animal:Animal = {
    name:'tom'
}

let tom = animal as Cat
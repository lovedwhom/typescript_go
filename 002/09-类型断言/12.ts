interface Animal {
    name: string;
}

interface Cat {
    name: string;
    run():void;
}

let tom: Cat ={
    name:"tom",
    run:()=>{console.log('run')}
}

let animal:Animal = tom;
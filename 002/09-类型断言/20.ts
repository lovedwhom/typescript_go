interface Animal {
    name:string;
}

interface Cat {
    name:string;
    run():void;
}

const animal: Animal = {
    name:'tom'
}

let tom :Cat =animal;

// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
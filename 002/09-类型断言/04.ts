interface Cat {
    name:string;
    run(): void
}

interface Fish {
    name:string;
    swim(): void
}

function swim (animal: Cat | Fish) {
    (animal as Fish).swim();
}

const Tom:Cat = {
    name:'Tom',
    run(){
        console.log('run');
    }
}

swim(Tom)

// 运行时报错
// animal.swim is not a function
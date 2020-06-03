interface Animal {
    name:string;
}

interface Cat {
    name:string;
    run(): void
}

function testAnimal(animal:Animal) {
    return (animal as Cat)
}

function TestCat (cat:Cat) {
    return (cat as Animal)
}
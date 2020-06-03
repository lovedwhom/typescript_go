interface Cat {
    name :string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void
}

function getName (animal: Cat | Fish ) :string {
    return animal.name    
}
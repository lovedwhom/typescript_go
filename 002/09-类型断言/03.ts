interface Cat {
    name :string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void
}

function getName (animal: Cat | Fish ):boolean  {
    if(typeof (animal as Fish).swim === 'function'){
        return true
    }
   return false
}

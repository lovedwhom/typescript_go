interface Cat {
    name :string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void
}

function getName (animal: Cat | Fish ):boolean  {

   if(typeof animal.swim === "function") {
       return true
   }
   return false
}

//Property 'swim' does not exist on type 'Cat | Fish'.
// Property 'swim' does not exist on type 'Cat'.
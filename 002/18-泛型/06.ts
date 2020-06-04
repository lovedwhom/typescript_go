interface Lengthwise {
    length:number;
}

function loggingIdentity<T extends Lengthwise> (arg:T):T {
    console.log(arg.length);
    return arg
    
}

// loggingIdentity(7);
// Argument of type '7' is not assignable to parameter of type 'Lengthwise'.

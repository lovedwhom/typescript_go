interface CreateArrayFunc {
    <T>(length:number,value:T):Array<T>
}

let createArray:CreateArrayFunc

createArray = function <T> (length:number,value:T):Array<T> {
    let result:T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result
}

createArray(3, 'x');
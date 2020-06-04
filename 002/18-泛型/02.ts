function cerateArray<T> (length:number,value:T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i<length;i++) {
        result[i] = value
    }
    return result
}

cerateArray<string>(3,'yang')
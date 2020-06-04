class GenericNumber <T> {
    zertValue :T;
    add:(x:T,y:T) =>T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zertValue =0;

myGenericNumber.add = function(x,y) {return x+y}
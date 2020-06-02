interface SearchFnc {
    (source:string,subString:string):boolean
}

let mySearch:SearchFnc;

mySearch = function(source:string,subString:string):boolean {
    return source.search(subString)  !==-1
}
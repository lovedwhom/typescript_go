
//ES6中reset 

// function push (array,...items) {
//     items.forEach(function(item){
//         array.push(item)
//     })
// }

//TS
function push (array:any[],...items:any[]) {
    items.forEach(function(item){
        array.push(item)
    })
}

//reset 参数只能是最后一个参数
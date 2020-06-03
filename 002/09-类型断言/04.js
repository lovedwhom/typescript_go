function swim(animal) {
    animal.swim();
}
var Tom = {
    name: 'Tom',
    run: function () {
        console.log('run');
    }
};
swim(Tom);

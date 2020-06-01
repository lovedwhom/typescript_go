function greeter(person) {
    return "hello," + person.firstName + "" + person.lastName;
}
var user = { firstName: 'yange', lastName: 'shuai' };
document.body.innerHTML = greeter(user);

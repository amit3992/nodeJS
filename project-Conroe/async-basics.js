console.log('Starting app')

setTimeout(() => {
	console.log('first callback > Inside of callback')
}, 2000)

// 1st parameter -> callback method
// 2nd parameter -> wait time

setTimeout(() => {
	sayHello('Amit');
}, 3000);

setTimeout(() => {
	console.log('second callback -> set time out works')
}, 0);



var add = (a,b) => {
	let total = a+b;
	return total;
};

var sayHello = function (name) {
	console.log('3rd callback -> Hello, ' + name)
};

var res = add(8,3)
console.log('Closing app -> ' + res)

//A function that takes at least three arguments and returns the result of some set of operations using those arguments

const firstFunc = function(a, b, c) {
	return a * b + c
}

//A function that takes no arguments and returns something

const secondFunc = function() {
	let a = "Hello"	
	let b = "World"
	return a + " " + b
}

//A function that takes arguments, does something but does not return anything

const thirdFunc = function(a, b) {
	a = 100
	b = 25
	let c = a/b
}

//A function that takes three strings and returns the string that is the longest.

const stringsFunc = function(string1, string2, string3) {
	if (string1.length > (string2.length && string3.length)) {
		return string1
	} else if (string2.length > (string1.length && string3.length)) {
		return string2
	} else if (string3.length > (string2.length && string1.length)) {
		return string3
	}
}

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const numFunc = function(num1, num2) {
	if (num1 === num2) {
		return 0
	} else if (num1 > num2) {
		return 1 
	} else {
		return -1
	}
}

//Create a multiply function (that multiplies the two given arguments together and returns the result)

const multiplyFunc = function(a, b) {
	const z = a * b
	return z
}

//Create a divide function (that divides the first argument by the second and returns the result)

const divideFunc = function(a, b) {
	const z = a/b
	return z
}

//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 

const triangleFunc = function(base, height) {
	const a = multiplyFunc(base, height)
	return divideFunc(a, 2)
}

//Create a function called numLength that takes a number and returns the number of characters in the number

const numLength = function(number) {
	let a = "" + number
	return a.length
}

//Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1

const func9 = function(string1, string2, number) {
	let a = "" + number
	if ((string1.length + string2.length) > a.length) {
		return 1
	} else {
		return -1
	}
}

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  
//If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1

const runStuff = function(number1, number2, string) {
	if (string === "rectangle") {
		return number1 * number2
	} else if (string === "triangle") {
		return triangleFunc(number1, number2)
	} else {
		return -1
	}
}


















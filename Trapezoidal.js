

//THIS PROBLEM IS A PART OF NUMERICAL INTEGRATION

//FAKE
//TRAPEZOIDAL RULE
//The things we nees to enter manually
//the limits 'a' and 'b'
//no of interval we require 'n'
//the 'function' that is given
//if you want values starting from a certain point then you can change value of 'x' which initialy is 'a'

//The Limits
a = 0
b = 6

//No of intervals we require or prefer, 6 is optimal and can be used for other methods as well
n = 6

//Step size
h = (b - a) / n

x_array = []
y_array = []



//Given function formulator
const y = (x) => {
    return 1/(1+(x*x))//Enter Function here
}



//initial value for series of x
x 


//laying out series of values of x and y from a to b in step sizes h

for (i = 0; i <= n; i++) {
    y_array.push(y(x))
    x_array.push(x)
    x = x + h
}



//laying out funtion for trapezoidal analysis
const trapezoidal = () => {
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    for (i of y_array) {
        result = result + i
    }
    result = (result - first_and_last) + (first_and_last / 2)
    return h * result
}


console.log("Trapezoidal")
console.log(`a = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]`)
console.log('Answer = ', + trapezoidal())
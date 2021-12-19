

//THIS PROBLEM IS A PART OF NUMERICAL INTEGRATION

//SIMPSON'S 1/3 RULE, THE RULE IS APPLICABLE ONLY IF TOTAL NO. OF INTERVAL IS EVEN

//The things we nees to enter manually
//the limits 'a' and 'b'
//no of interval we require 'n' by default we have '(b-a)' as the value of 'n'
//the 'function' that is given
//if you want values starting from a certain point then you can change value of 'x' which initialy is a

//The Limits
a = 0
b = 6

//No of intervals we require or prefer, '6 is optimal' and can be used for other methods as well

n = (b-a) //(b-a) will be used for default to get step size i.e 'h' to be 1 it can be entered any value of choice

//Step size
h = (b - a) / n

x_array = []
y_array = []

//initial value to start the series of x array
x = a


//Given function formulator
const y = (x) => {
    return 1/(1+(x*x)) ///Enter Function here
}


//function for laying out series of values of x and y from a to b in step sizes h
const compute_array = (x) => 
{
    for (i = 0; i <= n; i++) {
        y_array.push(y(x))
        x_array.push(x)
        h
    }
}




//laying out funtion for trapezoidal analysis
const trapezoidal = () => {
    console.log("Trapezoidal")
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    for (i of y_array) 
    {
        result = result + i
    }
    result = (result - first_and_last) + (first_and_last / 2)
    
    console.log(`a = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]`)
    console.log('Answer = ', + h * result)
}




//laying out funtion for Simpson's 1/3 analysis
const SimpsonsOneThirdRule = () => {
    console.log("SimpsonsOneThirdRule")
    odd_y_indices = []
    even_y_indices = []
    sum_of_odd = 0
    sum_of_even = 0
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    //IM A LITTLE SKEPTICAL ABOUT THE INITIAL VALUE OF i BEING x JUST PLUG IN 0 IN CASE THINGS GO WORNG
    for (i = x; i <= n; i++)
    {
        if ((i % 2 != 0) && (i != 0 && i != n)) //if odd excluding first and last elements
        {
            sum_of_odd = sum_of_odd + y_array[i]
            odd_y_indices.push(y_array[i])  
        }
        else if ((i % 2 == 0) && (i != 0 && i != n)) //if even  excluding first and last elements
        {
            sum_of_even = sum_of_even + y_array[i]
            even_y_indices.push(y_array[i])
        }
    }
    console.log(`odd_y_indices = [${odd_y_indices}]\neven_y_indices = [${even_y_indices}]\n\n`)
    console.log(`sum_of_odd = ${4*sum_of_odd}\nsum_of_even = ${2*sum_of_even}\n\n`)
    
    console.log(`a = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\n`)
    console.log('Answer = ', + h * (first_and_last + (4 * sum_of_odd) + (2 * (sum_of_even))) / 3)
}





compute_array(x)
trapezoidal()
SimpsonsOneThirdRule()
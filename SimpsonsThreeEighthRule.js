

//THIS PROBLEM IS A PART OF NUMERICAL INTEGRATION

//SIMPSON'S 3/8 RULE, THE RULE IS APPLICABLE ONLY IF TOTAL NO. OF INTERVAL IS MULTIPLE OF 3

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


three_multiples_indices = []
remaining_indices = []
sum_of_three_multiples = 0
sum_of_remainings = 0

//initial value to start the series of x array
x = a


//Given function formulator
const y = (x) => {
    return 1/(1+(x*x)) ///Enter Function here
}






//function for laying out series of values of x and y from a to b in step sizes h
const compute_array = (x) => {
    for (i = 0; i <= n; i++) {
        y_array.push(y(x))
        x_array.push(x)
        x = x + h
    }
}




//laying out funtion for Simpson's 1/3 analysis
const SimpsonsThreeEighthRule = () => {
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    //IM A LITTLE SKEPTICAL ABOUT THE INITIAL VALUE OF i BEING x JUST PLUG IN 0 IN CASE THINGS GO WORNG
    for (i = x; i <= n; i++) {
        if ((i % 3 == 0) && (i != 0 && i != n)) //if multiple of three excluding first and last elements
        { 
            sum_of_three_multiples = sum_of_three_multiples + y_array[i]
            three_multiples_indices.push(y_array[i])
            console.log('array',+ y_array[i])
        }
        else if (i != 0 && i != n) //every other term excluding first and last elements
        {
            sum_of_remainings = sum_of_remainings + y_array[i]
            remaining_indices.push(y_array[i])
        }
    }

    console.log(`FIRST ANDS LAST = ${first_and_last}\n\nthree_multiples_indices = [${three_multiples_indices}]\nremaining_indices = [${remaining_indices}]\n\nsum_of_three_multiples = ${sum_of_three_multiples}\nsum_of_remainings = ${sum_of_remainings}\n\n`)


    return (3 * h * (first_and_last + (3 * sum_of_remainings) + (2 * sum_of_three_multiples))) / 8
}


console.log("SimpsonsThreeEighthRule")


compute_array(x)
console.log(`a = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\n`)
console.log('Answer = ', + SimpsonsThreeEighthRule())
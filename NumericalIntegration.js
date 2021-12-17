
//The values needed for manually entry
//the limits 'a' and 'b'
//no of interval we require 'n', by default we have '(b-a)' as the value of 'n'
//the 'function' that is given
//if you want values starting from a certain point then you can change value of 'x' which initialy is a

//The Limits
a = 2
b = 8

//No of intervals we require or prefer, '6 is optimal' and can be used for other methods as well

n = 6//(b - a) //(b-a) will be used for default to get step size i.e 'h' to be 1 it can be entered any value of choice

//Step size
h = (b - a) / n

x_array = []
y_array = []

//initial value to start the series of x array
x = a


//Given function formulator
const y = (x) => {
    return (2*(x*x*x)+3)///Enter Function here
}


//super generalized function for laying out series of values of x and y from a to b in step sizes h
const compute_array = () => {
    //???? why do i have to add +h in upper limit, the condition 'a+(h*n)' already seems to satisfy the neccessary upper boundary condition
    for (i = x; i <= a + (h * n) ; i = i + h) //setting boundary condition to compute the array table of x and y(x) defined by a(initaial value), h(step number), and n(total number of iteration)
    {
        y_array.push(y(i))
        x_array.push(i)
    }
}



//laying out funtion for trapezoidal analysis
const trapezoidal = () => {
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    for (i of y_array) {
        result = result + i
    }
    result = (result - first_and_last) + (first_and_last / 2)

    console.log(`TRAPEZOIDAL\n\na = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\nAnswer = ${h * result}\n\n`)

}




//laying out funtion for Simpson's 1/3 analysis
const SimpsonsOneThirdRule = () => {

    odd_y_indices = []
    even_y_indices = []
    sum_of_odd = 0
    sum_of_even = 0
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    //IM A LITTLE SKEPTICAL ABOUT THE INITIAL VALUE OF i BEING x JUST PLUG IN 0 IN CASE THINGS GO WORNG
    for (i = x; i <= n; i++) {
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
    console.log(`SIMPSONS_ONE_THIRD_RULE\n\nodd_y_indices = [${odd_y_indices}]\neven_y_indices = [${even_y_indices}]\n\nsum_of_odd = ${4 * sum_of_odd}\nsum_of_even = ${2 * sum_of_even}\n\na = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\nAnswer = ${h * (first_and_last + (4 * sum_of_odd) + (2 * (sum_of_even))) / 3} \n\n`)

}



//laying out funtion for Simpson's 1/3 analysis
const SimpsonsThreeEighthRule = () => {

    three_multiples_indices = []
    remaining_indices = []
    sum_of_three_multiples = 0
    sum_of_remainings = 0
    result = 0
    first_and_last = (y_array[0] + y_array[n])
    //IM A LITTLE SKEPTICAL ABOUT THE INITIAL VALUE OF i BEING x JUST PLUG IN 0 IN CASE THINGS GO WORNG
    for (i = x; i <= n; i++) {
        if ((i % 3 == 0) && (i != 0 && i != n)) //if multiple of three excluding first and last elements
        {
            sum_of_three_multiples = sum_of_three_multiples + y_array[i]
            three_multiples_indices.push(y_array[i])
        }
        else if (i != 0 && i != n) //every other term excluding first and last elements
        {
            sum_of_remainings = sum_of_remainings + y_array[i]
            remaining_indices.push(y_array[i])
        }
    }

    console.log(`SIMPSONS_THREE_EIGHT_RULE\n\nFIRST ANDS LAST = ${first_and_last}\n\nthree_multiples_indices = [${three_multiples_indices}]\nremaining_indices = [${remaining_indices}]\n\nsum_of_three_multiples = ${sum_of_three_multiples}\nsum_of_remainings = ${sum_of_remainings}\n\na = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\nAnswer = ${3 * h * (first_and_last + (3 * sum_of_remainings) + (2 * sum_of_three_multiples)) / 8 }\n\n`)

}


//laying out funtion for Simpson's 1/3 analysis
const WeedlesRule = () => {

    odd_indices = []
    even_indices = []

    sum_of_odds = 0
    sum_of_even = 0

    //tracker to switch multiplier between 5 and 6 specific only to weedle's rule 
    five_or_six_tracker = 5
    result = 0
    first_and_last = (y_array[0] + y_array[n])

    //here i should start from 0 as we are now dealing with the final array table that has already been computed 
    for (i = 0; i <= n; i++) {
        if ((i % 2 != 0) && (i != 0 && i != n)) //if odd and  excluding first and last elements
        {

            odd_indices.push(y_array[i])
            sum_of_odds = sum_of_odds + (five_or_six_tracker * y_array[i])

            //switching multiplier between 5 and 6 where 5 is multiplied to 'nth odd' and 6 to 'nth + 1 odd' in the array of odd numbers
            if (five_or_six_tracker == 5) {
                five_or_six_tracker = 6
            }
            else if (five_or_six_tracker == 6) {
                five_or_six_tracker = 5
            }
        }
        else if ((i % 2 == 0) && (i != 0 && i != n)) //if even and  excluding first and last elements
        {
            sum_of_even = sum_of_even + y_array[i]
            even_indices.push(y_array[i])
        }
    }
    console.log(`WEEDLES_RULE\n\nFIRST ANDS LAST = ${first_and_last}\n\neven_indices = [${even_indices}]\nodd_indices = [${odd_indices}]\n\nsum_of_odds(multiplied alternately by 5 and 6) = ${sum_of_odds}\nsum_of_even = ${sum_of_even}\n\na = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\nAnswer  = {3 * h * (first_and_last) + (5* (nth odd instance) + 6 * (nth + 1 odd instance) ) + (sum_of_even)} /10 = ${((3 * h * (first_and_last + sum_of_odds + sum_of_even)) / 10)}\n\n`)
   
}



compute_array(x)
trapezoidal()
SimpsonsOneThirdRule()
SimpsonsThreeEighthRule()
WeedlesRule()
//THIS PROBLEM IS A PART OF NUMERICAL INTEGRATION
//WEEDLE'S RULE

//The things we nees to enter manually
//the limits 'a' and 'b'
//no of interval we require 'n'
//the 'function' that is given
//if you want values starting from a certain point then you can change value of 'x' which initialy is a

//The Limits
a = 0
b = 6

//No of intervals we require or prefer, 6 is optimal and can be used for other methods as well
n = 6

//Step size
h = (b - a) / n

x_array = []
y_array = []


odd_indices = []
even_indices = []


sum_of_odds = 0
sum_of_even = 0

//tracker to switch multiplier between 5 and 6 specific only to weedle's rule 
five_or_six_tracker = 5



//initial value to start the series of x array
x = a


//'Given function' formulator
const y = (x) => {
    return 1/(1+(x*x))  ///Enter Function here
}



//super generalized function for laying out series of values of x and y from a to b in step sizes h
const compute_array = () => 
{
    //???? why do i have to add +h in upper limit, the condition 'a+(h*n)' already seems to satisfy the neccessary upper boundary condition
    for (i = x; i <= a + (h * n) + h; i = i + h) //sseting boundary condition to compute the array table of x and y(x) defined by a(initaial value), h(step number), and n(total number of iteration)
    {
        y_array.push(y(i))
        x_array.push(i)
    }
}




//laying out funtion for Simpson's 1/3 analysis
const WeedlesRule = () => {
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
    console.log(`FIRST ANDS LAST = ${first_and_last}\n\neven_indices = [${even_indices}]\nodd_indices = [${odd_indices}]\n\nsum_of_odds(multiplied alternately by 5 and 6) = ${sum_of_odds}\nsum_of_even = ${sum_of_even}\n\n`)
    return (3 * h * (first_and_last + sum_of_odds + sum_of_even)) / 10
}


console.log("WeedlesRule")
compute_array()
console.log(`a = ${a}\nb = ${b}\n\nh = ${h}\nn = ${n}\n\nx_array = [${x_array}]\ny_array = [${y_array}]\n\n`)
console.log('Answer  = {3 * h * (first_and_last) + (5* (nth odd instance) + 6 * (nth + 1 odd instance) ) + (sum_of_even)} /10 \n', + WeedlesRule())
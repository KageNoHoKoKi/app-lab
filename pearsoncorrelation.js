//--------------------------------------------------------
// FUNCTION pearsonCorrelation
//author @code_in_js
//--------------------------------------------------------
//LAB 4
//calculate the correlation of 
//"number of the drinks the customers bought" and 
//"the preference between pickup and delivery from a scale of 1-5"
/* 1 being always pickup
2 being most of the time pickup and sometimes deliver
3 being neutral
4 being most of the time deliver and sometimes pickup
5 being always deliver 
*/ 


function pearsonCorrelation(independent, dependent)
{
    // covariance
    let independent_mean = arithmeticMean(independent);
    let dependent_mean = arithmeticMean(dependent);
    let products_mean = meanOfProducts(independent, dependent);
    let covariance = products_mean - (independent_mean * dependent_mean);

    // standard deviations of independent values
    let independent_standard_deviation = standardDeviation(independent);

    // standard deviations of dependent values
    let dependent_standard_deviation = standardDeviation(dependent);

    // Pearson Correlation Coefficient
    let rho = covariance / (independent_standard_deviation * dependent_standard_deviation);

    return rho;
}

//--------------------------------------------------------
// FUNCTION arithmeticMean
//--------------------------------------------------------
function arithmeticMean(data)
{
    let total = 0;

    // note that incrementing total is done within the for loop
    for(let i = 0, l = data.length; i < l; total += data[i], i++);

    return total / data.length;
}

//--------------------------------------------------------
// FUNCTION mean_of_products
//--------------------------------------------------------
function meanOfProducts(data1, data2)
{
    let total = 0;

    // note that incrementing total is done within the for loop
    for(let i = 0, l = data1.length; i < l; total += (data1[i] * data2[i]), i++);

    return total / data1.length;
}

//--------------------------------------------------------
// FUNCTION standardDeviation
//--------------------------------------------------------
function standardDeviation(data)
{
    let squares = [];

    for(let i = 0, l = data.length; i < l; i++)
    {
        squares[i] = Math.pow(data[i], 2);
    }

    let mean_of_squares = arithmeticMean(squares);
    let mean = arithmeticMean(data);
    let square_of_mean = Math.pow(mean, 2);
    let variance = mean_of_squares - square_of_mean;
    let std_dev = Math.sqrt(variance);

    return std_dev;
}

//our observations
let independent = [[2,1,3,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1]];
    let dependent = [[1,1,1,3,3,1,3,3,1,1,1,1,3,4,1,1,1,2,2,2,2,3,4,4,1,1,1,1,1,1,1,3]];
    let rho = 0;

    for(let dataset = 0; dataset < 1; dataset++)
    {

        rho = pearsonCorrelation(independent[dataset], dependent[dataset]);

        console.log(("Pearson Correlation Coefficient rho = " + rho));
    };


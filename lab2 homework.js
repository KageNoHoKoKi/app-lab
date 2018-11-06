const holdingPhone = .75
const isAlone = 1.5 
let drinks = {'frappe': 1.5, 'latte':2.5, 'americano':1};

let estimator = function( x, drink,drinks){
    
    if (x === holdingPhone){
       console.log( holdingPhone *  drinks[drink]);
    }
    else if (x === isAlone){
        console.log(drinks[drink] * isAlone);
    }
    else {
        console.log('Please check if your either holding a phone, and if your drink is valid'); 
    }
}
estimator(holdingPhone, 'frappe', drinks);
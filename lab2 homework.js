let holdingPhone = .75
let isAlone = 1.5
let drinks = {'frappe': 1.5, 'latte':2.5, 'americanos':1};

let estimater = function( x, drinks){
    if (x == holdingPhone){
       console.log((drinks * holdingPhone));
    }
    else if (x == isAlone){
        console.log((drinks * isAlone));
    }
    else {
        console.log('Please check if your either holding a phone, and if your drink is valid'); 
    }
}

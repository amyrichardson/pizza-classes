console.log('client sourced');

class Pizza {
    constructor (ingredients = 'cheese') {
        this.ingredients = ingredients;
    }
}

let newPizza = new Pizza ('cheese, pepperoni, sausage');
console.log(newPizza);

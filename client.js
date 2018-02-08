console.log('client sourced');

class Pizza {
    constructor (ingredients = ['cheese']) {
        this.ingredients = ingredients;  
    } //end constructor
} //end Pizza class

class SmallPizza extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.size = 'small';
        this.basePrice = 8.99
    }
}

class MediumPizza extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.size = 'medium';
        this.basePrice = 10.99
    }
}

class LargePizza extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.size = 'large';
        this.basePrice = 12.99
    }
}

class Order {
    constructor(pizzas = []) {
        this.pizzas = pizzas;
    } //end constructor

    calculatePrice() {
        let total = 0;
        for (let i = 0; i < this.pizzas.length; i++) {
            let pizzaPrice = this.pizzas[i].basePrice;
            pizzaPrice += 0.99 * (this.pizzas[i].ingredients.length - 1)            
            total += pizzaPrice;
        } //end for loop
        // this.calculateDiscount();

        return total;
    } //end calculateTotaPrice

    // calculateDiscount() {
    //     console.log('in discount');
    //     let largeCount = 0;
    //     let medium = false;
    //     for (let i = 0; i < pizzas[i].length; i++) {
            
            
    //     }
    // }
} //end Order class


let largePepperoni = new LargePizza(['cheese', 'pepperoni']);
let mediumPepperoni = new MediumPizza(['cheese', 'pepperoni']);


let order = new Order([largePepperoni, largePepperoni, mediumPepperoni]);


console.log(order, order.calculatePrice());


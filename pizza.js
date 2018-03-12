class Pizza {
    constructor(...ingredients){
        this.ingredients = ingredients.concat('cheese');
        this.basePrice = 10;
    }

    calculatePrice () {
        if(this.ingredients.length == 1){
            return this.basePrice;
        } else {
            return this.basePrice + (0.99 * this.ingredients.length - 1);
        }
    }
}

class Athena extends Pizza {
    constructor(...ingredients){
        super(...ingredients);
        this.specialIngredients = ['feta', 'other stuff'];
        this.basePrice = 14;
    }

    calculatePrice () {
        let cost = super.calculatePrice() + (0.99 * this.specialIngredients.length);
        return cost;
    }
}


class Order {
    constructor(...pizzas){
        this.pizzas = pizzas;
    }

    orderCost () {
        let total = 0;
        for(let pizza of this.pizzas){
            total += pizza.calculatePrice();
        }
        return total;
    }
}



let pizzaOne = new Pizza('one', 'two', 'three');
let pizzaTwo = new Pizza('a', 'b', 'c', 'd');
let pizzaThree = new Pizza();
let pizzaFour = new Athena('another thing', 'and another');
console.log('Pizza One:', pizzaOne);
console.log('Calculate price for Pizza One:', pizzaOne.calculatePrice());
console.log('Pizza Two:', pizzaTwo);
console.log('Calculate price for Pizza Two:', pizzaTwo.calculatePrice());
console.log('Pizza Three:', pizzaThree);
console.log('Calculate price for Pizza Three:', pizzaThree.calculatePrice());
console.log('Pizza Four:', pizzaFour);
console.log('Pizza Four:', pizzaFour.calculatePrice());




let order1 = new Order(pizzaOne, pizzaTwo, pizzaThree);
console.log('Order1:', order1);
console.log('Order cost for Order1:', order1.orderCost());


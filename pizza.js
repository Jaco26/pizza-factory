class Pizza {
    constructor(size, ...ingredients){
        this.ingredients = ingredients.concat('cheese');
        this.basePrice = 10;
        this.size = size;
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
    constructor(size, ...ingredients){
        super(size, ...ingredients);
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






const DOM = document.body;

function random() {
    return Math.floor(Math.random() * 255);
}

function appendYes () {
    DOM.style.color = 'white';
    DOM.style.fontFamily = 'sans-serif';
    let yay = document.createElement('h3');
    yay.textContent = 'YES!';
    yay.setAttribute('id', 'yay');
    DOM.appendChild(yay);
}
 
appendYes();

function changeBackgroundColor() {
    document.querySelector('#yay').textContent += ' YES!';
    let randomColor = `rgb(${random()}, ${random()}, ${random()})`;
    DOM.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 1000);





let pizzaOne = new Pizza('sm', 'one', 'two', 'three');
let pizzaTwo = new Pizza('md', 'a', 'b', 'c', 'd');
let pizzaThree = new Pizza('lg');
let pizzaFour = new Athena('md', 'another thing', 'and another');
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


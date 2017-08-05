class Animal {
    constructor(a, b) {
        this.name = a;
        this.height = b;
    }
    hello() {
        console.log(`hi I'm ${this.name} from around the way`)
    }
}
let king = new Animal("mufasa", 4.5);
console.log(king);
king.hello();

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height); //super allows use of the this keyword
        this.color = color;
    }
    hello() {
        console.log(`hi I'm ${this.name} from around the way`)
    }
}

let son = new Lion("Simba", 2, "brown");
console.log(son);
son.hello();
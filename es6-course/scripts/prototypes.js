function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
    return `I have a ${this.pet} named ${this.pet_name}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";

console.log(harry.greet());
console.log(harry);
console.log(harry.info());

//*******************************/
function Vehicle(make, year, color) {
    this.make = make;
    this.year = year;
    this.color = color;

    this.bio = () => `A ${this.color} ${this.make} made in ${this.year}.`;
}

let s = new Vehicle("Tesla", 2017);
s.color = "black";

console.log(s);
console.log(s.bio());
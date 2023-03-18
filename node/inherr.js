console.clear();
function Employee(name, place, id) {
    this.id = id;
    this.name = name;
    this.place = place;

    // static functions // available to all childrens
    this.staticInfo = function () {
        console.log('Employee staticInfo is serched in "this" of obj , else fallback to Prototype');
        console.log(`staticInfo : id: ${this.id}  name: ${this.name}`);
    }
}

Employee.prototype.introduce = function () {
    let type = "Base";
    if (this.bonus) {
        type = "PermanentEmployee";
    } else if (this.coupons) {
        type = "TempEmployee";
    }
    // let x = this;
    console.log(`${type} : id: ${this.id}  name: ${this.name}`);
}

Employee.prototype.staticInfo = function () { //this is useless
    console.log('outside class');
}

function PermanentEmployee(name, place, id, bonus) {
    Employee.call(this, name, place, id); // equivalent to super || base() in C#
    this.bonus = bonus;
    this.staticInfo = function () {
        console.log('PermanentEmployee static functions // available to all childrens');
    }
}
PermanentEmployee.prototype.staticInfo = function () { //this is useless
    console.log('outside class');
}
PermanentEmployee.prototype = Object.create(Employee.prototype);

PermanentEmployee.prototype.introduce = function () {

    console.log(`Hey I don't take work since i am PermanentEmployee : id: ${this.id}  name: ${this.name}`);
}


function TempEmployee(name, place, id, coupons) {
    Employee.call(this, name, place, id);
    
    this.coupons = coupons;
    this.staticInfo = function () {
        console.log('// TempEmployee static functions // available to all childrens');
        console.log('in class');
        console.log(`PermanentEmployee staticInfo : id: ${this.id}  name: ${this.name}`);
    }
}
TempEmployee.prototype = Object.create(Employee.prototype);

var e = new Employee("Employee", "Usa", "12", "1AC");
var p = new PermanentEmployee("PermanentEmployee", "India", "1", "10%");
var t = new TempEmployee("Temp Guy", "ch", "12", "1AC");
e.staticInfo()
p.staticInfo()
t.staticInfo()  
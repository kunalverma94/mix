function Employee(name) {
    this.name=name;
    this.play=function () {
        console.log('play');
    }
}
const eatFeature=(obj)=>( {
   eat(){
    console.log('eat', obj.name);
   }
})
function Admin(name) {
    Employee.call(this,name);
    this.work=function () {
        console.log('work', this.name);
    }
    return Object.assign(this,eatFeature(this));
}

Admin.prototype=Object.create(Employee.prototype);

var a=new Admin('admiiiin');
a.work();

a.eat()
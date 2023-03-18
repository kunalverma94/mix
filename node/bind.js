Function.prototype.mbind =function (...args1) {
    let obj=this;
    console.log(typeof (this)==='function')
    return function (...args2) {
        obj.apply(args1[0],args1.slice(1).concat(args2))
    }
}


function www(x,y,z) {
    console.log(this.x, x,y,z) ;
}


const w1=www.mbind({x:5},40);
w1(10,20)
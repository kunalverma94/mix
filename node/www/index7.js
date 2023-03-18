Function.prototype.bb=function (_this,...params) {
    const fx=this;
    return function (...params2) {
        fx.apply(_this,[...params,...params2])
    }
}


function print(x,y) {
    console.log(this.x,this.y,x,y);
}

print.bb({x:11,y:22},1,2)()
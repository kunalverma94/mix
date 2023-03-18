const pubSub=(function () {
   var x=new Map()

    this.subscribe=function (fx,ctx) {
        if (!x.has(fx)) {
            x.set(fx,ctx)
        }
    }
    this.publish=function (...params) {
        x.forEach((k,v)=>{
            try {
               v.apply(k,params)
            } catch (error) {
                console.log('unable to run for '+ z,error);
            }
        })
    }
    return {
        subscribe: this.subscribe,
        publish: this.publish
    }
})();
Function.prototype.subscribe=function (c) {
    const _this=c;
    pubSub.subscribe(this,_this);
    console.log('Added To subscriber');
}
function www(x) {
    console.log(x);
}
www.subscribe(this)

function xxx() {
    this.f=11;
    this.bb=function(zzz){
        console.log(this.f,zzz);
    }
}

var g= new xxx();
g.bb.subscribe(g)

pubSub.publish(123,22)

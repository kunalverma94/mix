function ParentClass(p1,p2) {
    this.p1=p1;
    this.p2=p2;

    this.thisScopeFunc=function () {
        console.log('ParentClass',this.p1,this.p2);
    }
}

ParentClass.prototype.protoScopeFunc=function () {
    console.log(this.p1,this.p2);
}

function ChildClass(p1,p2,c1,c2) {
    ParentClass.call(this,p1,p2)
    this.c1=c1;
    this.c2=c2;
    

}


ChildClass.prototype= Object.create(ParentClass.prototype);

let c=new ChildClass(1,11,2,22)
c.thisScopeFunc();
c.protoScopeFunc();


Function.prototype.throttle = function (timeOut, ...params) {
    const _this = this;
    let timer =true;
    return function () {
            if ( timer) {
                _this.apply(this, params);
                timer=false;
                setTimeout(() => timer=true , timeOut);
            }
    }
}

 function loadData (data) {
    console.log(data,this)
}

const _loadData = loadData.throttle(2000, 34)

function search(event) {
    _loadData(12)
}


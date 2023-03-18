
Function.prototype.debounce = function (timeOut, ...params) {
    const _this = this;
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => _this.apply(this, params), timeOut);
    }
}

 function loadData (data) {
    console.log(data,this)
}

const _loadData = loadData.debounce(2000, 34)

function search(event) {
    _loadData(12)
}


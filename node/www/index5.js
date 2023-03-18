Function.prototype.debounce = function (timeout, ...params) {
    const _this = this;
    let timer;
    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            _this.apply(this, params)
        }, timeout);
    }
}

Function.prototype.throttle = function (timeout, ...params) {
    const _this = this;
    let timer = true;
    return function () {
        if (timer) {
            _this.apply(this, params)
            timer = false;

            setTimeout(() => {
                timer = true;
            }, timeout);
        }

    }
}

Function.prototype.deeThrot = function (timeout, ...params) {
    const _this = this;
    let timer;
    let flag = true;

    return function () {

        clearTimeout(timer)
        timer = setTimeout(() => _this.apply(this, params)
          , timeout);

        if (flag) {
            _this.apply(this, params);
            flag = false;
           setTimeout(() => flag = true
            , timeout);
        }



    }

}
const _loadData = loadData.deeThrot(2000, 34)

function loadData(data) {
    console.log(data, this)
}

function search(event) {
    _loadData(12)
}


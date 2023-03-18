function throat(fx, timeout = 1000) {
    let timer;
    return function () {
        const _this = this;
        const args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fx.apply(_this, args)
        }, timeout);

    }
}

function getData(event) {
    const key =event.target.value
    return Promise.resolve().then(x => [key, key, key]).then(z => {
        console.log(z);
    })
}

const betterLoad = function () {
 return    throat(getData, 1500, arguments)
}();

function search(event) {
    betterLoad(event)
}
function search(event) {
    _searchAction(event);
}

const _searchAction =()=> debounce(searchAction);

function searchAction(event) {
    console.log(event.data);
}

function debounce(fx) {
    const _this = this;
    const args = arguments;
    let c;
    return function () {
        clearTimeout(c)
        c = setTimeout(() => {
            fx.apply(_this, args)
        }, 1500);

    }
}


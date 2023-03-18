function ABC(x,y,z) {
    this.x=x;
    this.y=y;
    this.z=z;
}
let user = {
    name: 'name',
    address: {
        home: {
            city: "home_city",
            areaCode: "123",
            landMarks: {
                primary: "lala",
                secondary: "lala",
                third: null
            }
        },
        office: "123",
        phone: [123, 435, 65],
        isActive: true,
        abc:new ABC(1,2,3)
    },
    dob:new Date()
};


function www(o, z, parent) {
    if (!z) {
        z = {};
    }
    if (!parent) {
        parent = 'root';
    }
    if (o) {
        for (const key of Object.keys(o)) {
            let _key = parent == undefined ? key : `${parent} > ${key}`

            const data = o[key];
            const isNonObject = typeof (data) != "object" || data == null || data == undefined || (data).constructor === Date;
            if (isNonObject) {
                z[_key] = data
            }
            else if (Array.isArray(data)) {
                console.log(112);
                z[_key] = data;
            }
            else {
                www(o[key], z, _key)
            }
        }
    }
    return z;
}

var z = www(user);
console.log(z);
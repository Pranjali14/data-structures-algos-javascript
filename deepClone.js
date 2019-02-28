function deepClone(obj) {
    let newObj = {};

    const keys = Object.keys(obj);

    let i = 0;

    while (i < keys.length) {
        const key = keys[i];
        const val = obj[key];
        if (typeof val === 'object') {
            newObj[key] = deepClone(val);
        } else {
            newObj[key] = val;
        }
        i++;
    }
    return newObj;
}

let obj = { a: true, b: { c: true, d: { e: true } } }
let clonedObj = deepClone(obj);
console.log('clonedObj', clonedObj);


clonedObj.b.d.e = false;

console.log(obj);

console.log('clonedObj', clonedObj);

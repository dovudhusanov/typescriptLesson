"use strict";
// const cars: string[] = ["ford", "audi"]
// const cars2: Array<string> = ["ford", "audi"]
// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve("Promise is resolved")
//     }, 2000)
// })
// document.getElementById("btn")?.addEventListener("click", () => {
//     promise.then(data => {
//         console.log(data)
//     })
// })
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "developer" }, { age: 16 });
const merged2 = mergeObjects({ model: "camaro" }, { year: 2017 });
const merged3 = mergeObjects({ a: "1" }, { b: 2 });
// console.log(merged3)
function merging(a, b) {
    return Object.assign({}, a, b);
}
function withCount(value) {
    return {
        value,
        count: `Hello in this text have an ${value.length} symbols`
    };
}
// console.log(withCount([0, 1, 2, 3, "developer"]))
//==================================
function getObjValue(obj, key) {
    return obj[key];
}
const person = {
    name: "developer",
    age: 16,
    job: "Javascript"
};
// console.log(getObjValue(person, 'name'))
// console.log(getObjValue(person, 'age'))
// console.log(getObjValue(person, 'job'))
//===============================
class Collection {
    _items;
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    update(key, item) {
        let idx = this._items.findIndex(d => d === key);
        if (idx < 0) {
            return console.log("No have item !");
        }
        this._items[idx] = item;
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    else if (year > 2000) {
        car.year = year;
    }
    return car;
}
// console.log(createAndValidateCar("camaro", 2200))
//=============== utilities =================
// const cars: Readonly<Array<string>> = ["Audi", "Ford"]
// cars.shift()
const ford = {
    model: "ford",
    year: 2022
};
// ford.model = "lambo"
//# sourceMappingURL=generic.js.map
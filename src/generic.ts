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

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: "developer"}, {age: 16})
const merged2 = mergeObjects({model: "camaro"}, {year: 2017});
const merged3 = mergeObjects({a: "1"}, {b: 2})

// console.log(merged3)

function merging<T, R>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

// console.log(merging(merged, merged2))

//===============================

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `Hello in this text have an ${value.length} symbols`
    }
}

// console.log(withCount([0, 1, 2, 3, "developer"]))

//==================================

function getObjValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: "developer",
    age: 16,
    job: "Javascript"
}

// console.log(getObjValue(person, 'name'))
// console.log(getObjValue(person, 'age'))
// console.log(getObjValue(person, 'job'))

//===============================

class Collection<T> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    update(key: string, item: T) {
        let idx = this._items.findIndex(d => d === key);

        if (idx < 0) {
            return console.log("No have item !")
        }

        this._items[idx] = item;
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection(["I", "Am", "developer"])
// strings.add("!")
// strings.remove("Am")
// console.log(strings.items)

//=============================

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    } else if (year > 2000) {
        car.year = year
    }

    return car as Car
}

// console.log(createAndValidateCar("camaro", 2200))

//=============== utilities =================
// const cars: Readonly<Array<string>> = ["Audi", "Ford"]
// cars.shift()
const ford: Readonly<Car> = {
    model: "ford",
    year: 2022
}
// ford.model = "lambo"

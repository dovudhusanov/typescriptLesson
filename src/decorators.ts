function Log(constructor: Function) {
    console.log(constructor)
}

function Log2(target: any, propName: string) {
    console.log(target)
    console.log(propName)
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@Log








class Component {
    @Log2
    name: string;

    @Log3
    get componentName() {
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }
    @Log3
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}


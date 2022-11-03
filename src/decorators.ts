// function Log(constructor: Function) {
//     console.log(constructor)
// }
//
// function Log2(target: any, propName: string) {
//     console.log(target)
//     console.log(propName)
// }
//
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log(target)
//     console.log(propName)
//     console.log(descriptor)
// }
//
// @Log
//
// class Component {
//     @Log2
//     name: string;
//
//     @Log3
//     get componentName() {
//         return this.name
//     }
//
//     constructor(name: string) {
//         this.name = name
//     }
//     @Log3
//     logName(): void {
//         console.log(`Component Name: ${this.name}`)
//     }
// }

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return (Constructor: Function) => {

    }
}

@Component({
    selector: ".card",
    template: `
        <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
})

class CardComponent {
    constructor(public name: string) {
    }

    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}
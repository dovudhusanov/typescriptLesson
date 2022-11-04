"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
                console.log(el);
            }
        };
    };
}
let CardComponent = class CardComponent {
    name;
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component Name: ${this.name}`);
    }
};
CardComponent = __decorate([
    Component({
        selector: "#card",
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
], CardComponent);
const card = new CardComponent("My Card Component");
//# sourceMappingURL=decorators.js.map
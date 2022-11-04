/// <reference path="form-namespace.ts" />

namespace Form {
    class MyForm {
        private type: FormType = "inline"
        private state: FormState = "active"

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    const form = new MyForm("developer@gmail.com")
    console.log(form)
}
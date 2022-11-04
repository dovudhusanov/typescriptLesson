"use strict";
/// <reference path="form-namespace.ts" />
var Form;
(function (Form) {
    class MyForm {
        email;
        type = "inline";
        state = "active";
        constructor(email) {
            this.email = email;
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    const form = new MyForm("developer@gmail.com");
    console.log(form);
})(Form || (Form = {}));
//# sourceMappingURL=namespaces.js.map
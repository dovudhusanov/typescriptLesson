// const hello: string = "hello"
// console.log(hello, "App.ts")

const btn: Element = document.getElementById("btn")!
btn.addEventListener("click", () => {
    console.log("Btn Clicked!")
})

const message: string = "String"

function login(data: string) {
    console.log(data);
}

login("Developer")


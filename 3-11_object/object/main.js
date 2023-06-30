'use strict'

// object
let jsbook = {
    // key: "value",
    // ↓key  ↓value   
    title: 'JavaScript入門',
    stock: 3,
    price: 2500,
    obj: {
        text: "test",
        func: () => {
            console.log("this is callback function")
        }
    }
}

console.log(jsbook)

// オブジェクトのKeyへのアクセス方法
// 本のタイトルにアクセス
let bookTitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook.obj.text)
console.log(jsbook.obj.func)


// オブジェクトの値を変える場合は?
jsbook.price = 3000
console.log( 'オブジェクトの値を変える場合は?' ,jsbook.price)

console.log(jsbook['stock'])
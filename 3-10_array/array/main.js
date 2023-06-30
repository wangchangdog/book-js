'use strict'

console.log("3-10 test")

let todoYarukoto = "やること"
let num = 7979874
// .. こんなのはやってられない。

let items = [
    "やること", 
    "プログラミング言語を見る", 
    "PCを買い替える", 
    "スマートフォンを買い替える", 
]

// console.log( todo[1] );

// items をすべて出力するようなプログラム
items.forEach(
    (item) => {
        console.log(item)
    }
);

// 項目を追加する
items.push("スマートフォン")
console.log(items)
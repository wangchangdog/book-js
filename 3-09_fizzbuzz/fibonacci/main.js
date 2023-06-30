console.log('fibonacci')
/**
 * 
1. 要件
    - 100までのフィボナッチ数列
2. フィボナッチ数列とは？
    - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …となるような数列
    
    フィボナッチ数列の条件は？
    
    - 最初の2つの数が0と1
    - その後の数が直前の2つの数の和になるような数列
 * 
*/


// nは自然数
function fibonacci(n) {
    // n <= 1 (1以下)のとき入力値 n をそのまま返す
    if ( n <= 1 ) {
        return n
    }
    // 1より大きい (n > 1)とき fibonacci(n-1) のときの数と fibonacci(n-2)　のときの数を足したものを返す
    return fibonacci( n - 1 ) + fibonacci( n - 2 )
}

console.log("fibonacci")
let i = 0
while ( i < 30) {
    console.log(fibonacci(i))
    i = i + 1;
}

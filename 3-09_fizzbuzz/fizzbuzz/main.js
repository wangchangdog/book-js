console.log('test')
/*
- 引数は num とし number型
- 3で割り切れる → Fizz!
- 5で割り切れる → Buzz!
- 3, 5の両方で割り切れる → FizzBuzz!
- それ以外は 入力値をそのまま返す
*/

function fizzbuzz(num) {
    if ( (num % 3 === 0) && (num % 5 === 0) ) {
        return "FizzBuzz!";
    } else if ( num % 3 === 0 ) { // 早期Return
        return 'Fizz!';
    } else if (num % 5 === 0 ) {
        return 'Buzz!'
    } else {
        // そのまま返す
        return num;
    } 
}
fizzbuzz(15); // 何が出てくる?
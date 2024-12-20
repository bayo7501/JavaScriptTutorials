'use strict';

console.log("var.js");

/**
 * var の使い方と let の使い方はほぼ同じ
 * 初期値がない変数ができ、値の再代入が可能
 */
//let bookTitle = "JavaScript Primer";

//let bookTitle;
//bookTitle = "JavaScript Primer";
//console.log(bookTitle);

/**
 * var の問題は、同じ変数を再定義できてしまう
 */
//let x = 0;
//let x = 1;
var x = 0;
var x = 1;
console.log(x);

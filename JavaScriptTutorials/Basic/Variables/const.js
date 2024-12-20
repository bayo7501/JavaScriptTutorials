'use strict';

console.log('const.js');
/**
 * 再代入できない変数の宣言
 */
//const bookTitle = "JavaScript Primer";

//const bookTitle = "JavaScript Primer",
//    bookCategory = "プログラミング";

//const bookTitle = "JavaScript Primer";
//const bookCategory = "プログラミング";

//const bookTitle = "JavaScript Primer";
//bookTitle = "新しいタイトル";

/**
 * オブジェクトにもconstが使える
 * オブジェクトという値そのものは、初期化したあとでも変更可能
 */
const NUMBER = 10;
const object = {
    key: "値"
};

object.key = "新しい値";

console.log(object.key);
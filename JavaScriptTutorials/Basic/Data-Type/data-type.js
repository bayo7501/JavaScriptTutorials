'use strict';

console.log("data-type.js")

console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function () { }); // => "function"

console.log(true); // => true
console.log(false); // => false

/**
 * 10進数
 */
console.log(1); // => 1
console.log(10); // => 10
console.log(255); // => 255

/**
 * 2進数(binary)
 * ビット演算とか
 */
console.log(0b1111); // => 15
console.log(0b10000000000); // => 1024
console.log(0b11111111111); // => 2047

/**
 * 8進数(octal)
 * ファイルのパーミッションとか
 */
console.log(0o644);  // => 420
console.log(0o777);  // => 511

/**
 * 16進数(hex)
 * RGBとか
 */
console.log(0xFF); // => 255
// 小文字で書いても意味は同じ
console.log(0xff); // => 255
console.log(0x30A2); // => 12450


function fn() {
    // 混乱するからやめたほうがいい変数名前
    const undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"
}
fn();

//const obj = {}; // 中身が空のオブジェクトを作成

//const obj = {
//    "key": "value"
//};

const obj = {
    "key": "value"
};
// ドット記法
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"

//const emptyArray = []; // 空の配列を作成
//const array = [1, 2, 3]; // 値を持った配列を作成

const array = ["index:0", "index:1", "index:2"];
// 0番目の要素を参照
console.log(array[0]); // => "index:0"
// 1番目の要素を参照
console.log(array[1]); // => "index:1"
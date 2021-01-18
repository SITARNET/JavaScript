// alert('\u058D');
// \u0061\u006C\u0065\u0072\u0074('hello world'); // alert('hello world')

// console.log('hello world');

// prompt('Clear console?'); // окно с полем
// confirm('Сколько тебе лет?') // окно с вопросом
// console.clear() // чистит консоль
// console.dir(window) // список свойств указанного JavaScript объекта
// console.error('err') // выводит сообщение об ошибке со своим сообением
// console.debug('Err') // выводит сообщение в веб-консоль на уровне журнала «отладка».
// отображается в том случае, если консоль настроена для отображения вывода отладки.
// console.count('cont') // регистрирует, сколько раз был вызван этот конкретный вызов count().
// console.group('Group 1') // новая встроенная группа в журнале веб-консоли до console.groupEnd().
// console.log('hello world1');
// console.log('hello world2');
// console.groupEnd()
// console.log('hello world3');
// console.info('Info') // выводит информационное сообщение
// console.table(["apples", "oranges", "bananas"]); // Отображает табличные данные в виде таблицы
// console.time('time');
// console.log('hello world');
// console.timeEnd ('time'); // за сколько выполнился скрипт
// console.warn('Warning!!!') // предупреждающее сообщение

console.log('Hello world');
console.error('Error');

console.time();

console.group('Null Literals');

var foo = null;
console.log(foo);

console.groupEnd();

console.group('Boolean Literals');

//var doo = true;
var doo = 1;

if (!doo) {
    console.log(true);
} else {
    console.log(false);
}

console.groupEnd();

console.group('Decimal literal');

var a = 10;
console.log(a);

var b = 1.2;
console.log(b);

var c = .2;
console.log(c);

var d = 1e+2;
console.log(d);

var e = 1e-2;
console.log(e);

console.groupEnd();

console.group('Binary literal with integers');

var f = 0b010101;
console.log(f);

var g = 0B010101;
console.log(g);

console.groupEnd();

console.group('Octal integer literal');

var h = 0o714;
console.log(h);

var i = 0O714;
console.log(i);

console.groupEnd();

console.group('Hexadecimal integer literal');

var h = 0xFFAA;
console.log(h);

var i = 0XFFAA;
console.log(i);

console.groupEnd();

console.group('String literals');

var j = "Hello world";
console.log(j);

var k = 'Hello world';
console.log(k);

var l = 'Hello \nworld';
console.log(l);

console.groupEnd();

console.timeEnd();

var m = 'How old are you?';
prompt(m);

var n = 'You are 18 years old?';
confirm(n);

var man = {name: 'Alex', soname: 'Pupkin', old: '35', gender: 'Man'};
console.info(man);

console.log(window);

console.log(document); // выводит структуру html

console.dir(document); // выводит список всех типов, классов... html

//let dude; // не нашло
//const dude; // syntax error
//var dude; // undefained
//console.log(window);

'use strict'
//let dude; // не нашло
//const dude; // syntax error
var dude; // undefained
console.log(window);


var a = 8, b = 5;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);


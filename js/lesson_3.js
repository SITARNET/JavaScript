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

// 1. "Hello world". Вывести в консоль "Hello world" без использования латиницы.
console.log('\u0048\u0065\u006c\u006c\u006f \u0077\u006f\u0072\u006c\u0064');

// 2. Error. Вывести в консоль Error. (console.error())
console.error('Error');

// 3. Literals. Вывести в консоль литералы JS: Null, Boolean Literals(оба), Numeric Literals(всех систем счисления), String Literals(3 базовых)
// 4. Group. Сгрупировать все литералы по типу и вывести группу с подписью конкретной группы.
// 5. Time. Засечь время выполнения кода из задания 4. (console.time()/console.timeEnd())
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

// 6. Age Спросить у пользователя сколько ему лет. Результат вывести в консоль. (prompt())
var m = 'How old are you?';
prompt(m);

// 7. 18- Спросить у пользователя есть ли ему 18. Результат вывести в консоль. (confirm())
var n = 'You are 18 years old?';
confirm(n);

// 8. Info. Спросить у пользователя имя, фамилию, возраст и пол. Результат записать в переменную и вывести в консоль одной строкой как поле info.
var man = {name: 'Alex', soname: 'Pupkin', old: '35', gender: 'Man'};
var name = prompt('What is your name?');
var soname = prompt('What is your soname?');
var old = prompt('How old are you?');
var gender = prompt('What is your gender?');
var person = console.info(name, soname, old, gender);
console.info(person);

// 9. Global. Вывести в консоль window. Изучить результат.
console.log(window);

// 10. DOM. Вывести в консоль document в 2 вариантах: dir и log. Сравнить результат.
console.log(document); // выводит структуру html

console.dir(document); // выводит список всех типов, классов... html

// 11. Dude. Создать переменную чувак без оператора var и вывести в консоль window. Ctrl+F в консоли, найти чувака в window.
// Перезапустить страницу, сделать то же но с оператором var. Изучить результат.

// let dude; // не нашло
// const dude; // syntax error
// var dude; // undefained
// console.log(window);

// 12. Strict dude. Повторить задание 11 с директивой "use strict". Изучить результат.
'use strict'
//let dude; // не нашло
//const dude; // syntax error
var dude; // undefained
console.log(window);

// 13. Value exchange. Даны две переменные с числами a = 8, b = 5. Составить фрагмент программы, после исполнения которого
// значения переменных поменялись бы местами (новое значение a равно старому значению b и наоборот).
var a = 8, b = 5;
var tmp = 8;
a = b;
b = tmp;

console.log(a, b);

// 14. Value exchange 2.0. Решить предыдущую задачу, не используя дополнительных переменных (и предполагая,
// что значениями переменных могут быть произвольные целые числа).
var a = 8, b = 5;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

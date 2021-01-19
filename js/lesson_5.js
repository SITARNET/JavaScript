// 2. Операции отношения

// 'use strict';
// var a = parseInt(prompt('Введите значение a: ', '')); // принимает строку в качестве аргумента и возвращает
// // целое число в соответствии с указанным основанием системы счисления.
// console.log('a < 10 -', a < 10);
// console.log('a > 10 -', a > 10);
// console.log('a = 10 -', a === 10);
// console.log('a ≠ 10 -', a != 10);

// 2.1 Сравнение разных типов

// 'use strict';
// alert( '2' > 1 ); // true, сравнивается как 2 > 1
// alert( '01' == 1 ); // true, сравнивается как 1 == 1
// alert( false == 0 ); // true, false становится числом 0
// alert( true == 1 ); // true, так как true становится числом 1.

// 2.2 Строгое равенство

// 'use strict';
// alert( 0 == false );  // true

// 'use strict';
// alert( ''  == false ); // true

// 'use strict';
// alert( 0 === false ); // false, т.к. типы различны

// 3.1 The if Statement/Инструкция if

// 3.3.1 Оператор if

// 'use strict';
// var a = prompt('Введите значение a: ', '');
// if ( a > 100 )
//     alert('Это число больше, чем 100');

// 3.3.2 Несколько операторов в теле if

// 'use strict';
// var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
// if (year != 2011)
//     alert( 'А вот и неправильно!' );
//
// 'use strict';
// if (year != 2011) {
//     alert( 'А вот..' );
//     alert( '..и неправильно!' );
// }

// 'use strict';
// var x = prompt('Введите число: ', '');
// if (x > 100) {
//     alert('Число ' + x);
//     alert('больше, чем 100');
// }

// 3.3.3 Оператор if...else

// 'use strict';
// var a = prompt('Введите число: ', '');
// if (a > 100)
//     alert('Это число больше, чем 100');
// else
//     alert('Это число не больше, чем 100');

// 'use strict';
// var year = prompt('Введите год появления стандарта ECMA-262 5.1', '');
// if (year == 2011) {
//     alert( 'Да вы знаток!' );
// } else {
//     alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
// }

// 3.3.4 Вложенные ветвления if...else

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// if (position != 'end') {
//     alert('Ваши координаты: ' + x + ',' + y);
//     position = prompt('Выберите направление (n, s, e, w): ', '');
//     if (position == 'n') // движение на север
//         y--;
//     else
//     if (position == 's') // движение на юг
//         y++;
//     else
//     if (position == 'e') // движение на восток
//         x++;
//     else
//     if (position == 'w') // движение на запад
//         x--;
//     alert('Ваши координаты: ' + x + ',' + y);
// }

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// if (position != 'end') {
//     alert('Ваши координаты: ' + x + ',' + y);
//     position = prompt('Выберите направление (n, s, e, w): ', '');
//     if (position == 'n') { // движение на север
//         y--;
//         console.log('go north');
//     } else {
//         if (position == 's') { // движение на юг
//             y++;
//             console.log('go south');
//         } else {
//             if (position == 'e') { // движение на восток
//                 x++;
//                 console.log('go east');
//             } else {
//                 if (position == 'w') {  // движение на запад
//                     x--;
//                     console.log('go west');
//                 }
//             }
//         }
//     }
//     alert('Ваши координаты: ' + x + ',' + y);
// }

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// if (position != 'end') {
//     alert('Ваши координаты: ' + x + ',' + y);
//     position = prompt('Выберите направление (n, s, e, w): ', '');
//     if (position == 'n') { // движение на север
//         y--;
//         console.log('go north');
//     } else if (position == 's') { // движение на юг
//         y++;
//         console.log('go south');
//     } else if (position == 'e') { // движение на восток
//         x++;
//         console.log('go east');
//     } else if (position == 'w') {  // движение на запад
//         x--;
//         console.log('go west');
//     }
// }
// alert('Ваши координаты: ' + x + ',' + y);

// 3.3.6 Условная операция, тернарный оператор(Conditional Operator)

// 'use strict';
// var alpha = 1, beta = 2;
// if (alpha < beta) {
//     min = alpha;
// } else {
//     min = beta;
// }

// 'use strict';
// var alpha = 1, beta = 2;
// min = (alpha < beta) ? alpha : beta; // если данное условие выполняеться, то = alpha, иначе = beta

// 3.3.7 Несколько условных операторов

// 'use strict';
// var age = prompt('Ваш возраст?', 18);
// var message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';
// alert( message );

// 'use strict';
// var age = prompt('Ваш возраст?', 18);
// if (age < 3) {
//     var message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//     var message = 'Привет!';
// } else if (age < 100) {
//     var message = 'Здравствуйте!';
// } else {
//     var message = 'Какой необычный возраст!';
// }
// alert( message );

// 3.2 The switch Statement/Инструкция switch
// 3.2.1 Оператор switch..case..default

// 'use strict';
// var month = +prompt('Введите месяц в формате 1, 2...12', '1'); // + переводит _default '1'
// // и другие значения к
// // в integer
// switch (month) {
//     case 1:
//         alert('Январь');
//         break;
//     case 2:
//         alert('Февраль ');
//         break;
//     case 3:
//         alert('Март');
//         break;
//     case 4:
//         alert('Апрель');
//         break;
//     case 5:
//         alert('Май');
//         break;
//     case 6:
//         alert('Июнь');
//         break;
//     case 7:
//         alert('Июль');
//         break;
//     case 8:
//         alert('Август');
//         break;
//     case 9:
//         alert('Сентябрь');
//         break;
//     case 10:
//         alert('Октябрь');
//         break;
//     case 11:
//         alert('Ноябрь');
//         break;
//     case 12:
//         alert('Декабрь');
//         break;
// }

// 'use strict';
// var month = +prompt('Введите месяц в формате 1, 2...12', '1');
// switch (month) {
//     case 1:
//         alert('Январь');
//         break;
//     case 2:
//         alert('Февраль ');
//         break;
//     case 12:
//         alert('Декабрь');
//         break;
//     default:
//         alert(month + ' - это не зимний месяц');
// }

// 3.2.2 Группировка case

// 'use strict';
// var month = +prompt('Введите месяц в формате 1, 2...12', '1');
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         alert('Зимний месяц');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Весенний месяц');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Летний месяц');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осенний месяц');
//         break;
// }

// 3.3 Сравнение switch и if ... else

// Когда лучше использовать последовательность if...else (или else...if), а когда — switch? При использовании else...if
// можно проверять значения разных не связанных друг с другом переменных, причем сравнения могут быть любой степени сложности:

// 'use strict';
// if (SteamPressure * Factor > 56)
// // statement
// else if (Voltageln + VoltageOut < 23000)
// // statement
// else if (day == Thursday)
// // statement
// else
// // statement

// 4. Объект Math

// 4.1 Свойства объекта Math

// var a = Math.E; // 2.718281828459045
// console.log(a);
//
// var a = Math.LN10; // 2.718281828459045
// console.log(a);
//
// var a = Math.LN2; // 0.6931471805599453
// console.log(a);
//
// var a = Math.LOG10E; // 0.4342944819032518
// console.log(a);
//
// var a = Math.LOG2E; // 1.4426950408889634
// console.log(a);
//
// var a = Math.PI; // 3.141592653589793
// console.log(a);
//
// var a = Math.SQRT1_2; // 0.7071067811865476
// console.log(a);
//
// var a = Math.SQRT2; // 1.4142135623730951
// console.log(a);

// 4.2 Методы объекта Math

// var a = Math.cbrt(27); // 3 возвращает кубический корень числа
// console.log(a);
//
// var a = Math.random(); // 3 возвращает кубический корень числа
// console.log(a);

// 5. Циклы(Loops)

// В JavaScript(стандарт ES6) существует 5 типов циклов:
// - do...while;
// - while;
// - for;
// - for..in;
// - for..of;

// 5.1 The for Statement/Цикл for

// В примере ниже, выводятся на экран квадраты целых чисел от 0 до 5:

// 'use strict';
// var i;
// for (i = 0; i <= 5; i++)
//     console.log(Math.pow(i, 2)); // 0 1 4 9 16 25

// 5.1.1 Несколько инструкций в теле цикла

// x *= y -> x = x * y // присваение с умножением

// 'use strict';
// var a = prompt('Введите значение a: ', '');
// for (var i = a, fact = 1; i > 0; i--) {
//     fact *= i;
// }
// alert(fact);

// Любое выражение в for может быть пропущено:
// 'use strict';
// var a = prompt('Введите значение a: ', '');
// var i = a, fact = 1;
// for (; i > 0; i--) {
//     fact *= i;
// }
// alert(fact);

// Инкрементирующее же выражение может быть внесено в тело цикла:
// 'use strict';
// var a = prompt('Введите значение a: ', '');
// var i = a, fact = 1;
// for (; i > 0;) {
//     fact *= i;
//     i--;
// }
// alert(fact)

// А можно и вообще убрать всё, получив бесконечный цикл.

// 'use strict';
// for (;;) {
//     //statement
// }





















































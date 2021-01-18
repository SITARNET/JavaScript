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











































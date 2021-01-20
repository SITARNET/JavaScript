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

// +'21' переводит в int
// ''+'21' переводит в string
// !!21 переводит в boolean

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

// 5.2 The while Statement/Цикл while

// 'use strict';
// var a = 1;
// while(a != 0)  // цикл, пока значение counter не равно 0
//     a = +prompt('Введите значение a: ', '');

// 5.2.1 Несколько инструкций в теле цикла while

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// while (position != 'end') {
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

// 5.3 The do-while Statement/Цикл do...while

// x -= y => x = x - y присваивание с вычитанием

// 'use strict';
// var balance = 100;
// do { // делать
//     alert('Ваш баланс ' + balance + '$');
//     balance -= prompt('Введите сумму, которую вы хотите снять', '0');
// } while (balance > 0); // пока
// alert('Вы потратили все!');

// 5.4 Выбор типа цикла

// Мы рассмотрели основные аспекты использования циклов. Цикл for подходит для тех случаев, когда мы заранее знаем,
// сколько раз нам потребуется его выполнение. Циклы while и do используются в тех случаях, когда число итераций цикла заранее не известно,
// причем цикл while подходит в тех случаях, когда тело цикла может быть не исполненным ни разу, а цикл do — когда обязательно
// хотя бы однократное исполнение тела цикла.
//
// Эти критерии достаточно спорны, поскольку выбор типа цикла больше определяется стилем, нежели строго определенными правилами.
// Каждый из циклов можно применить практически в любой ситуации. При выборе типа цикла стоит руководствоваться удобочитаемостью
// и легкостью восприятия вашей программы.

// 6. Метки. Инструкции перехода: break, continue

// 6.1 Метки(LabelledStatement)
// В JavaScript нет оператора(инструкции) goto, вы можете использовать только метки с break или continue.

// 6.2 BreakStatement/Инструкция break
// Существует 2 способа использовать break: с меткой и без.

// 6.2.1 Инструкция break без метки
// Инструкция break приводит к немедленному выходу из самого внутреннего цикла или инструкции switch.

// 6.2.2 Инструкция break с меткой

// 'use strict';
// myLabel: {
//     console.log(1);
//     break myLabel;
//     console.log(2);
// }
// console.log(3);

// 'use strict';
// outer: for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         var input = prompt('Значение в координатах ' + i + ', ' + j, '');
//         // если отмена ввода или пустая строка -
//         // завершить оба цикла
//         if (!input) break outer; // (*)
//     }
// }
// alert('Готово!');

// 6.3 ContinueStatement/Инструкция continue
// continue делает переход на завершающую фигурную скобку цикла, откуда производится обычный переход в начало тела цикла
// Инструкция continue может также использоваться с меткой:

// 7. Логические операции (Binary Logical Operators)
// В JavaScript есть 3 логических операции:
//     - || (ИЛИ);
//     - && (И);
//     - ! (НЕ).

// Если значение не логического типа - то в процессе вычислений к нему применяться преобразование к логическому типу.

// 7.1 Логическое И (&&)

'use strict';
// Первый аргумент - true,
// Поэтому возвращается второй аргумент
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// Первый аргумент - false,
// Он и возвращается, а второй аргумент игнорируется
// alert( null && 5 ); // null
// alert( 0 && "не важно" ); // 0

// 'use strict';
// if (a == b) stop(); // Функция stop() вызывается, только если a == b
// (a == b) && stop(); // То же самое

// 'use strict';
// a1 = true  && true;          // t && t вернёт true
// a2 = true  && false;         // t && f вернёт false
// a3 = false && true;          // f && t вернёт false
// a4 = false && (3 == 4);      // f && f вернёт false
// a5 = "Cat" && "Dog";         // t && t вернёт "Dog"
// a6 = false && "Cat";         // f && t вернёт false
// a7 = "Cat" && false;         // t && f вернёт false

// 7.2 Логическое ИЛИ (||)

// 'use strict';
// o1 = true  || true;         // t || t вернёт true
// o2 = false || true;         // f || t вернёт true
// o3 = true  || false;        // t || f вернёт true
// o4 = false || (3 == 4);     // f || f вернёт false
// o5 = "Cat" || "Dog";        // t || t вернёт "Cat"
// o6 = false || "Cat";        // f || t вернёт "Cat"
// o7 = "Cat" || false;        // t || f вернёт "Cat"

// 7.3 Логическое НЕ (!)
// Если переменная x имеет истинное значение, то выражение !x возвращает значение false.
// Оператор ! всегда возвращает true или false.

// 7.4 Использование логических операторов

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// while (true) {
//     alert('Ваши координаты: ' + x + ',' + y);
//     position = prompt('Выберите направление (n, s, e, w): ', '');
//
//     if (position == 'end') break;
//
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
//
//     if (x == 7 && y == 11) {
//         alert('Вы нашли сокровище');
//     }
// }

// 'use strict';
// var x = 10, y = 10, position = '';
// alert('Введите \'end\' для выхода...');
// while (true) {
//     alert('Ваши координаты: ' + x + ',' + y);
//     position = prompt('Выберите направление (n, s, e, w): ', '');
//
//     if (position == 'end') break;
//
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
//
//     if (x == 7 && y == 11) {
//         alert('Вы нашли сокровище');
//     }
//     if (x <= 5 ||  x >= 15) {
//         alert('Осторожно - драконы!');
//     }
// }

// 9. Упражнения
// 1. Треугольник в цикле

// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// 'use strict';
// var i;
// var a = '#';
// for (i = 0; i < 7; i++) {
//     if (i > 0) {
//         a += '#';
//     }
//     console.log(a);
// }

// 'use strict';
// var i;
// var a = '#';
// for (i = 0; i < 7; i++) {
//     if (a.length === 1) {
//         console.log(a);
//         a += '#';
//     } else {
//         a += '#';
//         console.log(a);
//     }
// }

// // 2.1..n
// // Напишите программу, которая выводит через console.log все числа от 1 до 100.
//
// var i = 1;
// for (i = 1; i <= 100; i ++) {
//     console.log(i);
// }

// 3. FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) { // если остаток от деления на 3 (от 1 до 100) равен 0 и остаток от деления на 5 (от 1 до 100) не равен 0
        console.log("Fizz"); // ввыводим Fizz, 3, 6, 9, 12...
    }
    else if (i % 5 === 0 && i % 3 !== 0) { // если остаток от деления на 5 (от 1 до 100) равен 0 и остаток от деления на 3 (от 1 до 100) не равен 0
        console.log("Buzz"); // ввыводим Buzz, 5, 15, 20, 25...
    } else if (i % 5 === 0 && i % 3 === 0) { // если остаток от деления на 3 и на 5 (от 1 до 100)
        console.log("FizzBuzz"); // ввыводим FizzBuzz, 15, 30, 45, 60, 75...
    } else
    {
         console.log(i); // ввыводим все оставшиеся числа...
    }
 }

// сам не сделал, но принцип понял, разобрался)))




















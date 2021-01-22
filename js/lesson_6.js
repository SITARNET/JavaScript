// Функции (Functions)

// 1. Вступление
// Функция – это блок программного кода на языке JavaScript, который определяется один раз и может выполняться, или вызываться, многократно.

// 2. Объявление функций

// 'use strict';
// function print(str, n) {
//     var newStr = '';
//     for (var i = 0; i < n; i++ ) {
//         newStr += str;
//     }
//     console.log(newStr);
// }

// 'use strict';
// function square(x) {
//     console.log(x*x);
// }

// 3. Вызов функций

// 'use strict';
// square(1+1); // 4
// print('+', 5); // '+++++';

// 4. Аргументы и параметры функций
// Функцию можно вызвать с любым количеством аргументов. Если параметр не передан при вызове – он считается равным undefined.

// 4.1 Аргументы по умолчанию

// 'use strict';
// function showMessage(from, text) {
//     if (text === undefined) {
//         text = 'текст не передан';
//     }
//     console.log( from + ": " + text );
// }
// showMessage("Маша", "Привет!"); // Маша: Привет!
// showMessage("Маша"); // Маша: текст не передан

// 5. Значение, возвращаемое функцией

// 'use strict';
// function lbsToKg (pounds) {
//     return 0.453592 * pounds;
// }
// var lbs = prompt('Введите вес в фунтах: ', '');
// var kgs = lbsToKg(lbs);
// console.log('Вес в килограммах равен ', kgs);

// Для возврата значения используется инструкция return. Как только до неё доходит управление – функция завершается.
// Инструкция return может также использоваться без значения, чтобы прекратить выполнение и выйти из функции.
// Инструкция return может располагаться только в теле функции. Присутствие ее в любом другом месте является синтаксической ошибкой.

// 'use strict';
// function square(x) {
//     return x*x;
// }
// var result = square(2);
// console.log(result);

// 6. Локальные переменные

// Функция может содержать локальные переменные, объявленные через var. Такие переменные видны только внутри функции:

// 'use strict';
// function showMessage() {
//     var message = 'Привет, я - Вася!'; // локальная переменная
//     console.log( message );
// }
// showMessage(); // 'Привет, я - Вася!'
// console.log( message ); // будет ошибка, т.к. переменная видна только внутри

// 7. Внешние переменные
// Функция может обратиться ко внешней переменной, например:

// 'use strict';
// var userName = 'Вася';
// function showMessage() {
//     var message = 'Привет, я ' + userName;
//     console.log(message);
// }
// showMessage(); // Привет, я Вася

// 'use strict';
// var userName = 'Вася';
// function showMessage() {
//     userName = 'Петя'; // (1) присвоение во внешнюю переменную
//     var message = 'Привет, я ' + userName;
//     console.log( message );
// }
// showMessage();
// console.log( userName ); // Петя, значение внешней переменной изменено функцией

// 8. Всплытие внутри функций

// 'use strict';
// function getValue(condition) {
//     if (condition) {
//         var value = "blue";
//         // другой код
//         return value;
//     } else {
//         // здесь переменная value будет существовать со значением undefined
//         return null;
//     }
//     // здесь переменная value будет существовать со значением undefined
// }

// Под капотом движок JavaScript изменяет функцию getValue таким образом, что она выглядит так:

// 'use strict';
// function getValue(condition) {
//     var value;
//     if (condition) {
//         value = "blue";
//         // другой код тут
//         return value;
//     } else {
//         return null;
//     }
// }

// Переменная value всплывает вверху блока и в том же месте происходит инициализация.
// Это означает, что переменная value все еще доступна в блоке else. Однако, если обратиться к ней, получим undefined, потому что она еще не проинициализирована.

// 9. Именование функций

// - Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает.
// - Функция – это действие, поэтому для имён функций, как правило, используются глаголы.

// 10. Резюме
// Функция – это блок программного кода на языке JavaScript, который определяется один раз и может выполняться, или вызываться, многократно.

// 11. Упражнения

// 1. Минимум

// В предыдущей главе была упомянута функция Math.min, возвращающая самый маленький из аргументов.
// Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// function minArg(x, y) {
//     var result = 0;
//     if (x > y) {
//         result = y;
//     } else {
//         result = x;
//     }
//     return result;
// }
//
// console.log(minArg(-30,20));

// 2. Even number
// Создайте функцию isEven, которая возвращает значение true или false в зависимости от того является ли аргумент x четным.

// function isEven(x) {
//     if (x % 2 === 0) {
//         x = true;
//
//     } else {
//         x = false;
//     }
//     return x;
// }
//
// console.log(isEven(68));

// 3. dayOfWeek
// Создайте функцию, которая принимает в себя число x э [1; 7] и возвращает название дня недели. Используйте switch-case.

// function dayOfWeek (x) {
// var y = Number(x);
// var day = '';
// switch (y) {
//     case 1:
//         day = 'Понедельник';
//         break;
//     case 2:
//         day = 'Вторник';
//         break;
//     case 3:
//         day = 'Среда';
//         break;
//     case 4:
//         day = 'Четверг';
//         break;
//     case 5:
//         day = 'Пятница';
//         break;
//     case 6:
//         day = 'Суббота';
//         break;
//     case 7:
//         day = 'Воскресенье';
//         break;
//     default: console.log('Введите номер дня недели!');
//     }
//     return day;
// }
//
// console.log(dayOfWeek(3));

// 4. calcBox
// Создайте функцию, которая принимает в себя 3 аргумента и рассчитывает объем коробки.

// function boxVolume(x, y, z) {
//     var vol = x * y * z;
//     return vol;
// }
//
// console.log('Объём коробки: ' + boxVolume(3,3,3));

// 5. hmsToSecs
// Напишите функцию hmsToSecs, имеющую три аргумента h, m, s. Функция должна возвращать эквивалент переданного
// ей временного значения в секундах. Создайте программу, которая будет циклически запрашивать у пользователя
// ввод значения часов, минут и секунд и выводить результат работы функции на экран.

function hmsToSec(h, m, s) {
    //var timeSec = 0;
    // h = setTimeout(() => parseInt(prompt('Введите часы: ', '')), 5000);
    // m = setTimeout(() => parseInt(prompt('Введите минуты: ', '')), 10000);
    // s = setTimeout(() => parseInt(prompt('Введите секунды: ', '')), 15000);
    // console.log(h, m, s);
    if (0 <= h <= 24) {
        if (0 <= m <= 60) {
            if (0 <= s <= 60) {
                var timeSec = s * m * h;
                console.log(timeSec);
            } else {
                console.log('Введите колличество секунд от 0 до 60!')
            }
        } else {
            console.log('Введите колличество минут от 0 до 60!')
        }
    } else {
        console.log('Введите колличество часов от 0 до 24!')
    }
    return timeSec;
}
// var htemp;
// var mtemp;
// var stemp;
// console.log('Время в секундах: ' + hmsToSec(10,50,61) + ' сек.');
// setTimeout(hmsToSec(parseInt(prompt('Введите часы: ', '10')),parseInt(prompt('Введите минуты: ', '10')),parseInt(prompt('Введите секунды: ', '10'))), 5000);
setTimeout(htemp = (() => prompt('Введите часы: ', 10))(), 100);
setTimeout(mtemp = (() => prompt('Введите минуты: ', 10))(), 1000);
setTimeout(stemp = (() => prompt('Введите секунды: ', 10))(), 2000);
setTimeout(hmsToSec, 5000, htemp, mtemp, stemp);
// hmsToSec(htemp, mtemp, stemp);

//console.log(hmsToSec());






































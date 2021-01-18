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

'use strict';
var x = 10, y = 10, position = '';
alert('Введите \'end\' для выхода...');
if (position != 'end') {
    alert('Ваши координаты: ' + x + ',' + y);
    position = prompt('Выберите направление (n, s, e, w): ', '');
    if (position == 'n') // движение на север
        y--;
    else
    if (position == 's') // движение на юг
        y++;
    else
    if (position == 'e') // движение на восток
        x++;
    else
    if (position == 'w') // движение на запад
        x--;
    alert('Ваши координаты: ' + x + ',' + y);
}
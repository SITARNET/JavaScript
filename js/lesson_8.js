// Arrays — Part 1st (Arrays and array processing)

// 1. Вступление
// Массив – это упорядоченная коллекция значений. Значения в массиве называются элементами, и каждый элемент характеризуется числовой позицией
// (или строкой если речь идет о ассоциативных массивах) в массиве, которая называется индексом (ключ для ассоциативных).
// Массивы в языке JavaScript являются нетипизированными: элементы массива могут иметь любой тип, причем разные элементы одного и того
// же массива могут иметь разные типы. Элементы массива могут даже быть объектами или другими массивами, что позволяет создавать сложные
// структуры данных, такие как массивы объектов и массивы массивов.
// В JavaScript есть 2 типа массивов: ассоциативные массивы и массивы с числовыми индексами.
// Ассоциативные массивы в JavaScript это не отдельный тип коллекции, а всего лишь объекты без методов.
// То есть если объект хранит данные и не делает с ними никаких действий это ассоциативный массив.
// В отличии от ассоциативных массивов, массивы с числовыми индексами в JavaScript считаются отдельной кастой (говорят подкласом) обычных объектов.
// Но не образуют отдельного типа данных как в других языках програмирования.

// 2. Объекты как ассоциативные массивы
// В этой главе мы рассмотрим использование объектов именно как массивов.
// Ассоциативные массивы - структура данных, в которой можно хранить любые данные в формате ключ-значение.
// Именно синтаксис доступа к полям объекта через квадратные скобки делает их похожими на ассоциативные массивы других языков програмирования.
// Так как ассоциативные массивы это просто объекты, все методики работы с объектами справедливы и к ассоциативным массивам.
// Могут закрасться сомнения нужно ли вводить такой термин как ассоциативные массивы, для JS колекций если это всего лишь объекты,
// но стоит знать что ассоциативные массивы имеют некие механизмы оптимизации, что приводит к отличиям реализаций таких структур на уровне памяти.
// А именно ассоциативные массивы поддерживают механизм компактного представления в памяти.

// 3. Массивы с числовыми индексами
// В этой главе мы рассмотрим использование подкласса Array - что реализовывает массивы с числовыми индексами в JavaScript.
// С этого момента и в будущем массивы с числовыми индексами мы будем называть просто массивами.
// Массив – разновидность объекта, которая предназначена для хранения пронумерованных значений и предлагает дополнительные методы для
// удобного манипулирования такой коллекцией.
// Отсчет индексов массивов в языке JavaScript начинается с нуля и для них используются 32-битные целые числа: первый элемент
// массива имеет индекс 0, а наибольший возможный индекс имеет значение 4294967295 элементов.

// 4. Создание массивов
// Легче всего создать массив с помощью литерала, который представляет собой простой список разделенных запятыми элементов массива в квадратных скобках.

// 'use strict';
// var empty = []; // Пустой массив
// var primes = [2, 3, 5, 7, 11]; // Массив с пятью числовыми элементами
// var misc = [ 1.1, true, "a" ]; // 3 элемента разных типов

// Значения в литерале массива не обязательно должны быть константами – это могут быть любые выражения:

// var base = 1024;
// var table = [base, base+1, base+2, base+3];

// Литералы массивов могут содержать литералы объектов или литералы других массивов:

// var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];

// Другой способ создания массива состоит в вызове конструктора Array(). Вызвать конструктор можно тремя разными способами:

// Вызвать конструктор без аргументов:
// var a = new Array();

// В этом случае будет создан пустой массив, эквивалентный литералу [].

// Вызвать конструктор с единственным числовым аргументом,
// определяющим длину массива:
// var a = new Array(10);

// В этом случае будет создан пустой массив указанной длины. Такая форма вызова конструктора Array() может использоваться для
// предварительного распределения памяти под массив, если заранее известно количество его элементов. Обратите внимание,
// что при этом в массиве не сохраняется никаких значений и даже свойства-индексы массива с именами «0», «1» и т.д. в массиве не определены.

// Явно указать в вызове конструктора значения первых двух или более
// элементов массива или один нечисловой элемент:
// var a = new Array(5, 4, 3, 2, 1, "testing, testing");

// В этом случае аргументы конструктора становятся значениями элементов нового массива. Использование литералов массивов практически всегда проще,
// чем подобное применение конструктора Array().

// 5. Доступ к элементам массива
// Доступ к элементам массива осуществляется с помощью оператора [ ]. Слева от скобок должна присутствовать ссылка на массив.
// Внутри скобок должно находиться произвольное выражение, возвращающее неотрицательное целое значение. Этот синтаксис пригоден как для чтения,
// так и для записи значения элемента массива. Следовательно, допустимы все приведенные далее JavaScript-инструкции:

// var a = ["world"]; // Создать массив с одним элементом
// var value = a[0]; // Прочитать элемент 0
// a[1] = 3.14; // Записать значение в элемент 1
// var i = 2;
// a[i] = 3; // Записать значение в элемент 2
// a[i + 1] = "hello"; // Записать значение в элемент 3
// a[a[i]] = a[0]; // Прочитать элементы 0 и 2, записать значение в элемент 3

// Напомню, что массивы являются специализированной разновидностью объектов. Квадратные скобки, используемые для доступа к элементам массива,
// действуют точно так же, как квадратные скобки, используемые для доступа к свойствам объекта. Интерпретатор JavaScript преобразует указанные
// в скобках числовые индексы в строки – индекс 1 превращается в строку "1", – а затем использует строки как имена свойств. В преобразовании
// числовых индексов в строки нет ничего особенного: то же самое можно проделывать с обычными объектами.

// 6. Длина массива

// Любой массив имеет свойство length, и это свойство отличает массивы от обычных объектов JavaScript.
// Для плотных (т. е. неразреженных) массивов свойство length определяет количество элементов в массиве.
// Его значение на единицу больше самого большого индекса в массиве:

// [].length // => 0: массив не имеет элементов
// ['a','b','c'].length // => 3: наибольший индекс равен 2, длина равна 3

// Вторая особенность в поведении, обеспечивающем работу свойства length, заключается в том, что при присваивании свойству length
// неотрицательного целого числа n, меньшего, чем его текущее значение, все элементы массива с индексами,
// большими или равными значению n, удаляются из массива:

// var a = [1, 2, 3];
// a.length = 2;
// console.log(a); // [1, 2]

// 7. Добавление и удаление элементов массива
// Мы уже видели, что самый простой способ добавить элементы в массив заключается в том, чтобы присвоить значения новым индексам:

// a = [] // Создать пустой массив.
// a[0] = "zero"; // И добавить элементы.
// a[1] = "one";

// 8. Методы класса Array
// Стандарты ECMAScript3-6 определяеют в составе Array.prototype множество удобных функций для работы с массивами,
// которые доступны как методы любого массива. Эти методы будут представлены в следующих подразделах.
// Более полную информацию можно найти в разделе Array в справочной части MDN по базовому языку JavaScript.

// 8.1 ES3

// 8.1.1 Метод join()
// Метод Array.join() преобразует все элементы массива в строки, объединяет их и возвращает получившуюся строку.
// В необязательном аргументе методу можно передать строку, которая будет использоваться для отделения элементов в строке результата.
// Если строка-разделитель не указана, используется запятая.

// var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
// var str = arr.join(';');
// alert( str ); // Маша;Петя;Марина;Василий
// alert(typeof str); // "string"
//
// var str = arr.join();
// alert( str ); // Маша,Петя,Марина,Василий
//
// var str = arr.join(', ');
// alert( str ); // Маша, Петя, Марина, Василий

// 8.1.2 Метод reverse()
// Метод Array.reverse() меняет порядок следования элементов в массиве на обратный и возвращает переупорядоченный массив.
// Перестановка выполняется непосредственно в исходном массиве, т. е. этот метод не создает новый массив с переупорядоченными элементами,
// а переупорядочивает их в уже существующем массиве.

// var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
// arr.reverse();
// console.log(arr); // ["Василий", "Марина", "Петя", "Маша"]

// 8.1.3 Метод split()
// Метод split(s), который позволяет превратить строку в массив, разбив ее по разделителю s.
// В примере ниже таким разделителем является строка из запятой и пробела.

// var names = 'Маша, Петя, Марина, Василий';
// var arr = names.split(', ');
// for (var i = 0; i < arr.length; i++) {
//     alert( 'Вам сообщение ' + arr[i] );
// }

// У метода split есть необязательный второй аргумент – ограничение на количество элементов в массиве.
// Если их больше, чем указано – остаток массива будет отброшен.

// 8.1.4 Метод slice()
// Метод Array.slice() возвращает фрагмент, или подмассив, указанного массива. Два аргумента метода определяют начало и конец
// возвращаемого фрагмента. Возвращаемый массив содержит элемент, номер которого указан в первом аргументе, плюс все последующие элементы,
// вплоть до (но не включая) элемента, номер которого указан во втором аргументе. Если указан только один аргумент, возвращаемый массив
// содержит все элементы от начальной позиции до конца массива. Если какой-либо из аргументов имеет отрицательное значение,
// он определяет номер элемента относительно конца массива. Так, аргументу –1 соответствует последний элемент массива,
// а аргументу –3 – третий элемент массива с конца.

// var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
// var part = arr.slice(1, 3); // ["Петя", "Марина"]

// Если вообще не указать аргументов – скопируется весь массив.

// 8.1.5 Метод splice()
// Метод Array.splice() – это универсальный метод, выполняющий вставку или удаление элементов массива. Метод splice() изменяет исходный массив,
// относительно которого он был вызван. Обратите внимание, что методы splice() и slice() имеют очень похожие имена, но выполняют совершенно разные операции.
// Метод splice() может удалять элементы из массива, вставлять новые элементы или выполнять обе операции одновременно.
// Элементы массива при необходимости смещаются, чтобы после вставки или удаления образовывалась непрерывная последовательность.
// Первый аргумент метода splice() определяет позицию в массиве, начиная с которой будет выполняться вставка и/или удаление.
// Второй аргумент определяет количество элементов, которые должны быть удалены (вырезаны) из массива. Если второй аргумент опущен,
// удаляются все элементы массива от указанного до конца массива. Метод splice() возвращает массив удаленных элементов или
// (если ни один из элементов не был удален) пустой массив.

// var a = [1,2,3,4,5,6,7,8];
// a.splice(4); // Вернет [5,6,7,8]; a = [1,2,3,4]
// a.splice(1,2); // Вернет [2,3]; a = [1,4]
// a.splice(1,1); // Вернет [4]; a = [1]

// Первые два аргумента метода splice() определяют элементы массива, подлежащие удалению. За этими аргументами может следовать любое
// количество дополнительных аргументов, определяющих элементы, которые будут вставлены в массив, начиная с позиции, указанной в первом аргументе.

// var a = [1,2,3,4,5];
// a.splice(2,0,'a','b'); // Вернет []; a = [1,2,'a','b',3,4,5]
// a.splice(2,2,[1,2],3); // Вернет ['a','b']; a = [1,2,[1,2],3,3,4,5]

// 8.1.6 Метод concat()

// Метод Array.concat() создает и возвращает новый массив, содержащий элементы исходного массива, для которого был вызван метод concat(),
// и значения всех аргументов, переданных методу concat(). Если какой-либо из этих аргументов сам является массивом, его элементы добавляются
// в возвращаемый массив. Следует, однако, отметить, что рекурсивного превращения массива из массивов в одно мерный массив не происходит.
// Метод concat() не изменяет исходный массив. Ниже приводится несколько примеров:

// var a = [1,2,3];
// a.concat(4, 5) // Вернет [1,2,3,4,5]
// a.concat([4,5]); // Вернет [1,2,3,4,5]
// a.concat([4,5],[6,7]) // Вернет [1,2,3,4,5,6,7]
// a.concat(4, [5,[6,7]]) // Вернет [1,2,3,4,5,[6,7]]

// 8.1.7 Метод sort()
// Метод Array.sort() сортирует элементы в исходном массиве и возвращает отсортированный массив. Если метод sort() вызывается без аргументов,
// сортировка выполняется в алфавитном порядке (для сравнения элементы временно преобразуются в строки, если это необходимо).

// Для сортировки в каком-либо ином порядке, отличном от алфавитного, методу sort() можно передать функцию сравнения в качестве аргумента.
// Эта функция устанавливает, какой из двух ее аргументов должен следовать раньше в отсортированном списке. Если первый аргумент должен
// предшествовать второму, функция сравнения должна возвращать отрицательное число. Если первый аргумент должен следовать за вторым в
// отсортированном массиве, то функция должна возвращать число больше нуля. А если два значения эквивалентны (т.е. порядок их следования не важен),
// функция сравнения должна возвращать 0. Поэтому, например, для сортировки элементов массива в числовом порядке можно сделать следующее:

// var a = [33, 4, 1111, 222];
// a.sort(); // Алфавитный порядок: 1111, 222, 33, 4
// a.sort(function(a,b) { // Числовой порядок: 4, 33, 222, 1111
//     return a-b; // Возвращает значение < 0, 0 или > 0
// }); // в зависимости от порядка сортировки a и b
// a.sort(function(a,b) {return b-a}); // Обратный числовой порядок

// Обратите внимание, насколько удобно использовать в этом фрагменте неименованную функцию. Функция сравнения используется только здесь,
// поэтому нет необходимости давать ей имя.


// 8.2 ES5
// Стандарт ECMAScript 5 определяет девять новых методов массивов, позволяющих выполнять итерации, отображение, фильтрацию, проверку, свертку и поиск.
// Все эти методы описываются в следующих далее подразделах.
// Однако, прежде чем перейти к изучению особенностей, следует сделать некоторые обобщения, касающиеся методов массивов в ECMAScript 5.
// Во-первых, большинство описываемых ниже методов принимают функцию в первом аргументе и вызывают ее для каждого элемента
// (или нескольких элементов) массива. В случае разреженных массивов указанная функция не будет вызываться для несуществующих элементов.
// В большинстве случаев указанной функции передаются три аргумента: значение элемента массива, индекс элемента и сам массив.
// Чаще всего вам необходим будет только первый аргумент, а второй и третий аргументы можно просто игнорировать.
// Большинство методов массивов, введенных стандартом ECMAScript 5, которые в первом аргументе принимают функцию, также принимают
// второй необязательный аргумент. Если он указан, функция будет вызываться, как если бы она была методом этого второго аргумента.
// То есть второй аргумент будет доступен функции, как значение ключевого слова this. Значение, возвращаемое функцией, играет важную роль,
// но разные методы обрабатывают его по-разному. Ни один из методов массивов, введенных стандартом ECMAScript 5, не изменяет исходный массив.
// Разумеется, функция, передаваемая этим методам, может модифицировать исходный массив.

// 8.2.1 Метод forEach()
// Метод forEach() выполняет обход элементов массива и для каждого из них вызывает указанную функцию. Как уже говорилось выше,
// функция передается методу forEach() в первом аргументе. При вызове этой функции метод forEach() будет передавать ей три аргумента:
// значение элемента массива, индекс элемента и сам массив. Если вас интересует только значение элемента, можно написать функцию с
// одним параметром – дополнительные аргументы будут игнорироваться:

// var data = [1,2,3,4,5]; // Массив, элементы которого будут суммироваться
// // Найти сумму элементов массива
// var sum = 0; // Начальное значение суммы 0
// data.forEach(function(value) { sum += value; }); // Прибавить значение к sum
// sum // => 15
// // Увеличить все элементы массива на 1
// data.forEach(function(v, i, a) { a[i] = v + 1; });

// 8.2.2 Метод map()
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]

// Функция map просто преобразует один массив в другой массив.

// var friends = [
//     {id:1, name: 'Dave',age:50},
//     {id:2,name: 'Kellie',age:42},
//     {id:3,name: 'Max',age:12},
//     {id:2,name: 'Jack',age:12}
// ];
// var friendsNamesList = friends.map(function(element) {
//     return element.name;
// });
//
// ["Dave", "Kellie", "Max", "Jack"]  // ["Dave", "Kellie", "Max", "Jack"]

// 8.2.3 Метод filter()
// Метод filter() возвращает массив, содержащий подмножество элементов исходного массива. Передаваемая ему функция должна быть
// функцией-предикатом, т. е. должна возвращать значение true или false. Метод filter() вызывает функцию точно так же,
// как методы forEach() и map(). Если возвращается true или значение, которое может быть преобразовано в true, переданный функции
// элемент считается членом подмножества и добавляется в массив, возвращаемый методом. Например:

// a = [5, 4, 3, 2, 1];
// smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]
// everyother = a.filter(function(x,i) { return i%2==0 }); // [5, 3, 1]

// Обратите внимание, что метод filter() пропускает отсутствующие элементы в разреженных массивах и всегда возвращает плотные массивы.
// Чтобы уплотнить разреженный массив, можно выполнить следующие действия:

// var dense = sparse.filter(function() { return true; });
// А чтобы уплотнить массив и удалить из него все элементы со значениями undefined и null, можно использовать метод filter(), как показано ниже:

// a = a.filter(function(x) { return x !== undefined && x != null; });

// 8.2.3 Методы every() и some()
// Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.

// Метод some() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор,
// пока не найдет такой, для которого callback вернет истинное значение (значение, становящееся равным true при приведении его
// к типу Boolean). Если такой элемент найден, метод some() немедленно вернёт true. В противном случае, если callback вернёт false для всех
// элементов массива, метод some() вернёт false. Функция callback вызывается только для индексов массива, имеющих присвоенные значения;
// она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

// function isBiggerThan10(element, index, array) {
//     return element > 10;
// }
// [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

// Метод every() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор,
// пока не найдет такой, для которого callback вернет ложное значение (значение, становящееся равным false при приведении его к типу Boolean).
// Если такой элемент найден, метод every() немедленно вернёт false. В противном случае, если callback вернёт true для всех элементов массива,
// метод every() вернёт true. Функция callback вызывается только для индексов массива, имеющих присвоенные значения;
// она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);   // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true

// 8.2.4 Методы reduce() и reduceRight()

// Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
// Это один из самых сложных методов для работы с массивами. Но его стоит освоить, потому что временами с его помощью можно в несколько строк решить задачу,
// которая иначе потребовала бы в разы больше места и времени.
// Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива».
// Чуть далее мы разберём пример для вычисления суммы.
// Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.
// Аргументы функции callback(previousValue, currentItem, index, arr):

// previousValue – последний результат вызова функции, он же «промежуточный результат».
// currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
// index – номер текущего элемента.
// arr – обрабатываемый массив.
// Кроме callback, методу можно передать «начальное значение» – аргумент initialValue. Если он есть, то на первом вызове значение
// previousValue будет равно initialValue, а если у reduce нет второго аргумента, то оно равно первому элементу массива, а перебор начинается со второго.

// Проще всего понять работу метода reduce на примере.
// Например, в качестве «свёртки» мы хотим получить сумму всех элементов массива.
// Вот решение в одну строку:

// var arr = [1, 2, 3, 4, 5]
//
// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);
// console.log( result ); // 15

// При первом запуске sum – исходное значение, с которого начинаются вычисления, равно нулю (второй аргумент reduce).
// Сначала анонимная функция вызывается с этим начальным значением и первым элементом массива, результат запоминается и
// передаётся в следующий вызов, уже со вторым аргументом массива, затем новое значение участвует в вычислениях с третьим аргументом и так далее.

// Как видно, результат предыдущего вызова передаётся в первый аргумент следующего.
// Кстати, полный набор аргументов функции для reduce включает в себя function(sum, current, i, array), то есть номер текущего вызова i и весь массив arr,
// но здесь в них нет нужды.
// Посмотрим, что будет, если не указать initialValue в вызове arr.reduce:

// var arr = [1, 2, 3, 4, 5]
//
// // убрали 0 в конце
// var result = arr.reduce(function(sum, current) {
//     return sum + current
// });
//
// alert( result ); // 15

// Результат – точно такой же! Это потому, что при отсутствии initialValue в качестве первого значения берётся первый элемент массива,
// а перебор стартует со второго.
// Таблица вычислений будет такая же, за вычетом первой строки.
// Метод arr.reduceRight работает аналогично, но идёт по массиву справа-налево.

// 8.2.5 Методы indexOf() и lastIndexOf()
// Методы indexOf() и lastIndexOf() отыскивают в массиве элемент с указанным значением и возвращают индекс первого найденного элемента или –1,
// если элемент с таким значением отсутствует. Метод indexOf() выполняет поиск от начала массива к концу, а метод lastIndexOf() – от конца к началу.

// a = [0,1,2,1,0];
// console.log(a.indexOf(1)) // => 1: a[1] = 1
// console.log(a.lastIndexOf(1)) // => 3: a[3] = 1
// console.log(a.indexOf(3)) // => -1: нет элемента со значением 3

// В отличие от других методов, описанных в этом разделе, методы indexOf() и lastIndexOf() не принимают функцию в виде аргумента.
// В первом аргументе им передается искомое значение. Второй аргумент является необязательным: он определяет индекс массива,
// с которого следует начинать поиск. Если опустить этот аргумент, метод indexOf() начнет поиск с начала массива, а метод lastIndexOf() – с конца.
// Во втором аргументе допускается передавать отрицательные значения, которые интерпретируются как смещение относительно конца массива,
// как в методе splice(): значение –1, например, соответствует последнему элементу массива.

// 8.3 ES6

// Стрелочные функции (чем они отличаются от function)
// Let и const (и чем они лучше var)
// Деструктуризация и spread
// Модульная система ес6
// Строки (а именно шаблоны строк)
// Классы
// Промисы

// 8.3.1 Методы find()

// Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?
// Здесь пригодится метод arr.find.

// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });

// Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.
// Например, у нас есть массив пользователей, каждый из которых имеет поля id и name. Попробуем найти того, кто с id == 1:

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
// ];
//
// let user = users.find(item => item.id == 1); // стрелочная функция item передаёт id == 1
//
// console.log(user.name); // Вася

// В реальной жизни массивы объектов – обычное дело, поэтому метод find крайне полезен.
// Обратите внимание, что в данном примере мы передаём find функцию item => item.id == 1, с одним аргументом.
// Это типично, дополнительные аргументы этой функции используются редко.
// Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.

// 8.3.2 Методы findIndex()

// Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.

// 8.3.3 Методы fill

// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

// [1, 2, 3].fill(4);               // [4, 4, 4]
// [1, 2, 3].fill(4, 1);            // [1, 4, 4]
// [1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
// [1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
// [1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
// [1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
// Array(3).fill(4);                // [4, 4, 4]
// [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
//
// // Объекты заполняются по ссылке.
// var arr = Array(3).fill({}) // [{}, {}, {}];
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// 8.3.4 Методы copyWithin()

// Метод copyWithin() копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target.
// Копия берётся по индексам, задаваемым вторым и третьим аргументами start и end. Аргумент end является необязательным и по умолчанию равен длине массива.

// [1, 2, 3, 4, 5].copyWithin(0, 3);
// // [4, 5, 3, 4, 5]
//
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// // [4, 2, 3, 4, 5]
//
// [1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// // [4, 2, 3, 4, 5]
//
// [].copyWithin.call({length: 5, 3: 1}, 0, 3);
// // {0: 1, 3: 1, length: 5}
//
// // Типизированные массивы ES6 являются подклассами Array
// var i32a = new Int32Array([1, 2, 3, 4, 5]);
//
// i32a.copyWithin(0, 2);
// // Int32Array [3, 4, 5, 4, 5]
//
// // На платформах, которые ещё не совместимы с ES6:
// [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// // Int32Array [4, 2, 3, 4, 5]

// 1. compareFunctionNumber(a, b)
// Напишите функцию compareFunctionNumber(a, b), которая принимает 2 аргумента и возвращает true если первый больше второго и false в ином случае. Приводить к числу оба аргумента внутри функции.

// function compareFunctionNumber(a, b) {
//     var atemp = Number(a), btemp = Number(b);
//     return (atemp > btemp) ? true : false;
// }
//
// console.log(compareFunctionNumber(11, 10));

// 2. hasElement(element, arr)
// Напишите функцию hasElement(element, arr), которая принимает 2 аргумента и возвращает true если element есть среди элементов массива и false в ином случае.

// function hasElement(element, arr) {
//     var flag = false;
//     for (var i = 0; arr.length > i; i++) { // перебераем от 0 до 5
//         if (arr[i] === element) { // если 4 = значению id:3 = 4
//             //console.log('Element in - ' + i); // id = 3 (0,1,2,3)
//             flag = true; // ставим флаг true
//             break;
//         }
//     }
//     if (!flag) { // если флаг не true
//         console.log('Dont has this element!');
//     }
//     return flag;
// }
// // hasElement(4, [1, 2, 3, 4, 5, 6]); // вызываем функцию с аргументами, и что ищем в каком массиве
// console.log(hasElement(9,[1,2,3,4,5,6]));

// 3. indexOfElement(element, arr)
// Напишите функцию indexOfElement(element, arr), которая принимает 2 аргумента и возвращает индекс вхождения element-а в массив arr
// и -1 в случае отсутствия element-а в массиве.

function indexOfElement(element, arr)
{
    for (var i = 0; arr.length > i; i++)
    {
        if (arr[i] === element)
            return i;
    }
    return -1;
}

console.log(indexOfElement(4,[1,2,3,4,5,6]));

// var result = indexOfElement(8, [1,2,3,4,5,6]);
//     if (result === -1) {
//         console.log('Not found!')
//     }
//     else {
//         console.log('Index: ' + result);
//     }

// function indexOfElement(element, arr) {
//     var result = false;
//     for (var i = 0; arr.length > i; i++) {
//         //console.log(arr[i]);
//         if (arr[i] === element) {
//             console.log('Index:' + i);
//             result = true;
//             break;
//         }
//     }
//     if (!result) {
//         i = -1;
//         console.log('Not found! Index: ' + i);
//     }
//     return i;
// }
//
// // indexOfElement(4, [1,2,3,4,5,6]);
// console.log(indexOfElement(4, [1,2,3,4,5,6]));

// function indexOfElement(element, arr) {
//     var arrIndex = arr.indexOf(element);
//     if (arrIndex === -1) {
//         console.log('Element ' + element + ' with ' + arrIndex + ' index not found!');
//     } else {
//         console.log('Element ' + element + ' is present in ' + arrIndex + ' index!');
//     }
//     return arrIndex;
// }
//
// indexOfElement(4, [1,2,3,4,5,6]);




































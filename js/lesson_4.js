// 1. User. Создайте пустой объект user. Добавьте свойство name со значением Вася. Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей. Удалите свойство name из объекта.

var user = {};

user.name = 'Вася';
user.soname = 'Петров';

console.log(user)

delete user.name;
console.log(user);
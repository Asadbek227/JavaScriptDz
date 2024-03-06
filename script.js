var str = prompt('Введите свое имя')
console.log('Меня зовут '+ str);

var str = prompt('Введите ваш возраст')
console.log('Мне '+ str);


var str = prompt('Решите пример 2 + 2 = ? ' )
console.log('Пример 1: 2 + 2 = '+ str);
var boolean = ('правильный ответ : ' + 4)
console.log(boolean);
if(str == 4) 
    alert("Правильный ответ!")

else
    alert("Неправильный ответ!")


var str = prompt('Решите пример 2 - 2 = ? ' )
console.log('Пример 2: 2 - 2 = '+ str);
var boolean = ('правильный ответ : ' + 0)
console.log(boolean);
if(str == 0) 
    alert("Правильный ответ!")

else
    alert("Неправильный ответ!")



var str = prompt('Решите пример 2 / 2 = ? ' )
console.log('Пример 3: 2 / 2 = '+ str);
var boolean = ('правильный ответ : ' + 1)
console.log(boolean);
if(str == 1) 
    alert("Правильный ответ!")

else
    alert("Неправильный ответ!")


var str = prompt('Решите пример 2 % 2 = ? ' )
console.log('Пример 4: 2 % 2 = '+ str);
var boolean = ('правильный ответ : ' + 0)
console.log(boolean);
if(str == 0) 
    alert("Правильный ответ!")

else
    alert("Неправильный ответ!")



const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const num3 = parseFloat(prompt("Введите третье число:"));

const average = (num1 + num2 + num3) / 3;

alert(`Средняя ${num1}, ${num2}, и ${num3} равна ${average}.`);

console.log('Средняя ваших чисел: ' + average);


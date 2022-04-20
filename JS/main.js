
/* ------HW-1------ */


var userName = prompt('What is your name?');
alert('Hello, ' + userName + ' How are you?');



/* ------HW-2------ */

/* ----Задача 1----- */
var min = +prompt('Введите число от 0 до 59', '0-59');
if (min >= 0 && min <= 14) {
  alert('First part')
}
if (min >= 15 && min <= 30) {
  alert('Second part')
}
if (min >= 31 && min <= 45) {
  alert('Third part')
}
if (min >= 46 && min <= 59) {
  alert('Fourth part')
}


/* ----Задача 2----- */
var a = '1';
if (a == '1') {
  alert('Верно');
} else {
  alert('Неверно');
};

var a = 1;
if (a == '1') {
  alert('Верно');
} else {
  alert('Неверно');
};

var a = 3;
if (a == '1') {
  alert('Верно');
} else {
  alert('Неверно');
};


/* ----Задача 3----- */


var test = 0;

if (test != true) {
  alert('Верно');
}
else {
  alert('Неверно');
};


var test = true;

if (test != true) {
  alert('Верно');
}
else {
  alert('Неверно');
};

var test = false;

if (test != true) {
  alert('Верно');
}
else {
  alert('Неверно');
};

test != true ? alert('Верно') : alert('Неверно')


/* ----Задача 4----- */


var a = 5;

if (a >= 0 && a <= 5) {
  alert('Верно');
} else {
  alert('Неверно')
};

var a = 0;

if (a >= 0 && a <= 5) {
  alert('Верно');
} else {
  alert('Неверно')
};

var a = -3;

if (a >= 0 && a <= 5) {
  alert('Верно');
} else {
  alert('Неверно')
};

var a = 2;

if (a >= 0 && a <= 5) {
  alert('Верно');
} else {
  alert('Неверно')
};


/* ----Задача 5----- */

var num = 1;
var resalt;

if (num == 1) {
  alert(resalt = 'Зима');
}
else if (num == 2) {
  alert(resalt = 'Весна');
}
else if (num == 3) {
  alert(resalt = 'Лето');
}
else if (num == 4) {
  alert(resalt = 'Осень');
}

var num = 2;
var resalt;

if (num == 1) {
  alert(resalt = 'Зима');
}
else if (num == 2) {
  alert(resalt = 'Весна');
}
else if (num == 3) {
  alert(resalt = 'Лето');
}
else if (num == 4) {
  alert(resalt = 'Осень');
}

var num = 3;
var resalt;

if (num == 1) {
  alert(resalt = 'Зима');
}
else if (num == 2) {
  alert(resalt = 'Весна');
}
else if (num == 3) {
  alert(resalt = 'Лето');
}
else if (num == 4) {
  alert(resalt = 'Осень');
}

var num = 4;
var resalt;

if (num == 1) {
  alert(resalt = 'Зима');
}
else if (num == 2) {
  alert(resalt = 'Весна');
}
else if (num == 3) {
  alert(resalt = 'Лето');
}
else if (num == 4) {
  alert(resalt = 'Осень');
}

/* ------HW-3------ */


var a = +prompt ('Введите число', 100);
var b = +prompt ('Введите второе число', 100);
var c = prompt ('Ведите цифру 1 - если хотите прибавть числа, 2 - отнять, 3 - разделить и 4 - умножить');

var resalt;

switch(c){
  case '1': resalt = a + b;
  break;
  case '2': resalt = a - b;
  break;
  case '3': resalt = a / b;
  break;
  case '4': resalt = a * b;
  break;
  default: alert('Вы ввели не допустимое значение!')
  }
  alert(resalt);
/**
 * Created by Olga on 7/14/2017.
 */
//If-else, switch-case
//1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
var day;
day = prompt('Введите день месяца от 1 до 30');
if ((day > 0)&&(day <=31)){
 if ((day > 0)&&(day < 11)) {
    alert('Число в первой декаде');
 }
 if ((day > 10)&&(day < 21)) {
    alert('Число во второй декаде');
 }
 if ((day > 20)&&(day < 32)) {
    alert('Число в третьей декаде');
 }
}
else {
    alert('Введите корректное число!');
}

//2. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
var month;
month = prompt('Введите номер месяца');
switch (month){
    case '12':
    case '1':
    case '2': alert('Это зимний месяц');break;
    case '3':
    case '4':
    case '5': alert('Это весенний месяц');break;
    case '6':
    case '7':
    case '8': alert('Это летний месяц');break;
    case '9':
    case '10':
    case '11': alert('Это осенний месяц');break;
    default: alert('Неизвестный месяц');
}

//3. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
var st = prompt('Введите строку с цифрами');
switch(st[0]){
    case '1':
    case '2':
    case '3': alert('Да');break;
    default: alert('Нет');
}

//4. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
var st = prompt('Введите строку с цифрами');
var i,j;
var s1=0,s2=0;
if (st.length>=6){
for (i=0,j=3;i<3,j<6;i++,j++){
    s1=+s1 + +st[i];
    s2=+s2 + +st[j];
}
 if (s1==s2){
    alert('Да '+s1+' равно '+s2);
 }
 else {
    alert('Нет '+s1+' не равно '+s2);
 }
}
else {
    alert('Введите 6 цифр');

}
//For, while, do-while
//1.Выведите столбец чисел от 11 до 33.
for (var i=11;i<=33;i++){
    console.log(i);
}

//2. Выведите столбец четных чисел в промежутке от 0 до 100
for (var i=0;i<=100;i++){
    if (i%2==0) {
        console.log(i);
    }
}

//3.С помощью цикла найдите сумму чисел от 1 до 100
 var s = 0;
 var i = 0;
 while (i<=100){
     s+=i;
     i++;
}
console.log(s);

//Функции
//1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром
var num = prompt('Введите число, которое нужно возвести в квадрат');

function sqNum(a) {
    return a*a;
}
alert(sqNum(num));

//2.Сделайте функцию, которая отнимает от первого числа второе и делит на третье
var x,y,z;
function myFunc(a,b,c) {
    if (c!=0){
        return (a-b)/c;
    }
}
console.log(myFunc(1,3,4));

//3.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function dayOfWeek(d) {
  switch (d){
      case '1': return "Понедельник";break;
      case '2': return "Вторник";break;
      case '3': return "Среда";break;
      case '4': return "Четверг";break;
      case '5': return "Пятница";break;
      case '6': return "Суббота";break;
      case '7': return "Воскресенье";break;
      default: return "Введите число от 1 до 7";
  }
}
var d = prompt("Введите номер дня недели (число от 1 до 7)");
alert(dayOfWeek(d));

//4.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function eqNum(a,b) {
    if (a==b){
        return true;
    } else{
        return false;
    }
}
alert(eqNum(1,2));

//5. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function nNum(a){
  if (a<0){
      return false;
  }  else {
      return true;
  }
}
alert(nNum(0));

//Необязательные задачи
//1.С помощью двух вложенных циклов нарисуйте следующую пирамидку
for (var i=1;i<6;i++){
    var s = "";
    for (var j=0;j<i;j++) {
        s+=i;
    }
    console.log(s);
}

//2.С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str
var str = "-";
for (var i=1;i<10;i++){
  str+=i+"-";
}
console.log(str);


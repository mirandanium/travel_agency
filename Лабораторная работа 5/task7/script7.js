function compare(){
    alert('Проверьте, равны ли числа друг другу?')
    let number1 = prompt ('Введите первое число');
    number1 = Number(number1);
   let number2 = prompt ('Введите второе число');
    number2 = Number(number2);
   if (number1 === number2) a = true ;
   else a = false;
    alert(a);
}
compare();
function checkSum() {
    alert('Проверка суммы двух чисел на больше 10')
    let number1 = prompt ('Введите первое число');
    number1 = Number(number1);
   let number2 = prompt ('Введите второе число');
    number2 = Number(number2);
    if ((number1 + number2) <= 10) a = false;
    else a = true;
    alert(a);
 }
checkSum();
function checkNumber() {
    let number = prompt ('Проверьте отрицательное ли число?');
    number = Number(number);
    if (number < 0) a = true ;
    else a = false;
    alert(a);
 }
 checkNumber();

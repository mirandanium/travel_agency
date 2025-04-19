let checkTwoNum = () => {
  let num1 = prompt ('Введите первое число');
  num1 = Number(num1);
  let num2 = prompt ('Введите второе число');
  num2 = Number(num2);
  a = (num1 > num2) ? a = 1:
  (num1 == num2) ? a = 0: a = -1;
  alert(a);
 }
 checkTwoNum();
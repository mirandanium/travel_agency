function square() {
  let number = prompt ('Введите число');
   number = Number(number);
    a = number * number;
    alert(`Квадрат числа = ${a}`);
  }
  square();
  function summ() {
    let b = prompt ('Введите первое число');
     num1 = Number(b);
    let c = prompt ('Введите второе число');
     num2 = Number(c);
    a = num1 + num2;
    alert(`Сумма чисел = ${a}`);
  } 
  summ();
  function division() {
    let b = prompt ('Введите уменьшаемое');
    num1 = Number(b);
    let c = prompt ('Введите вычитаемое');
    num2 = Number(c);
    let d = prompt ('Введите делитель');
    num3 = Number(d);
    a = (num1 - num2)/num3;
    alert(a);
  } 
  division(); 


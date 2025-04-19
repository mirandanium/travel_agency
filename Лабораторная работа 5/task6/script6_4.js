function dayOfWeek() {
 let a = prompt('Введите день недели', 5);
switch (a){
case '1': 
    a = 'Понедельник';
    alert(a);
    break;
case '2': 
    a = 'Вторник';
    alert(a);
    break;
case '3': 
    a = 'Среда';
    alert(a);
    break;
case '4': 
    a = 'Четверг';
    alert(a);
    break;
case '5': 
    a = 'Пятница';
    alert(a);
    break;
case '6': 
    a = 'Суббота';
    alert(a);
    break;
case '7': 
    a = 'Воскресенье';
    alert(a);
    break;
default: alert('В неделе только 7 дней!'); break;
}
}
dayOfWeek();

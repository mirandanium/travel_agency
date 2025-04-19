let lang = prompt('Введите язык ru или bel: ');
let week;
switch (lang){
    case 'ru': 
       week = ["Понедельник", " вторник", " среда", " четверг", " пятница", " суббота", " воскресенье"];
       alert(week);
       break;
     case 'bel':
       week = ["Панядзелак", " аўторак", " серада", " чацвер", " пятніца", " субота", " нядзеля"];
       alert(week);
      break;
    default: alert('Нет такого языка на выбор!'); break;
}
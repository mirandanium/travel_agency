function checkHTMl(){
let str = prompt ('Введите ссылку на проверку .html в конце');
if (str.substr(-5) == '.html') alert('Да');
else alert('Нет');
}
checkHTMl();
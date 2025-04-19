function checkHTTP(){
let str = prompt ('Введите ссылку на проверку http:// в начале');
if (str.substring(0, 7) == 'http://') alert('Да');
 else alert('Нет');
}
checkHTTP();
/*Запросить у пользователя возраст. Добавить условие при котором возраст будет выводиться с правильным словом: "год", "года" или "лет". 
 Я думаю больше 150 учитывать не нужно
Пример:
 - "4 года" 4 роки
 - "31 год" 31 рік
 - "29 лет" 29 років 
спитати вік у користувача 
додати умову, де вік буде виводитися з правильними словами -"рік. роки, років"- більше 150 не треба враховувати */

let age = prompt("Скільки тобі років?");
age = parseInt(age);

if (age >= 10 && age <=20) {
    alert("Тобі" + " " + age + " " + "років!");//від 11 до 20 

} else if (age >= 11 && age <=150) {
    alert("Тобі" + " " + age + " " + "років!");//від 105 до 150 

} else if ( age % 2 == 0) {
    alert("Тобі" + " " + age + " " + "роки!");//закінчується на 2

} else if (age >= 102 && age <= 104) {
    alert("Тобі" + " " + age + " " + "роки!");//102,103,104

}else if (age % 10 == 0) {
    alert("Тобі" + " " + age  + " " + "років!")//закінчується на нуль

} else if (age != 11 && age % 10 == 1) {
    alert("Тобі" + " " + age  + " " + "рік!")//закінчується на 1, але не 11

} else if (age > 1 && age < 5) {
    alert("Тобі" + " " + age + " " + "роки!");//2,3,4

}  else if ( age >= 5 && age <= 9) {
    alert("Тобі" + " " + age + " " + "років!");//5,6,7,8,9

} else if (age > 150) {
    alert("Введіть свій справжній вік");

} else {
    alert("Введіть свій вік");
}
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

let ageEndswithK = age %10 == 1;
let ageEndswithKy = age %10 >= 2 && age % 10 <= 4;
let ageEndswithKiv = age %10 >= 5 && age %10 <=9 || age %10 == 0 || age % 100 >= 11 && age % 100 <= 14;

if (age > 150) {
    alert("Введіть свій справжній вік");
}

else if (ageEndswithKiv) {
    alert("Тобі" + " " + age  + " " + "років!") //5-9,0
}
else if (ageEndswithKy) {
    alert("Тобі" + " " + age + " " + "роки!");//2,3,4

} else if (ageEndswithK) {
    alert("Тобі" + " " + age  + " " + "рік!")//закінчується на 1, але не 11
}
 
else {
    alert("Введіть свій вік");
}
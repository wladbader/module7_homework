//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const f = (obj) => {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const person = {
    country: "Kazakhstan",
}

user = Object.create(person);

user.name = "Wlad";
user.age = 26;

f(user);
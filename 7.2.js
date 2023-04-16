//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const hasProp = (string, obj) => obj.hasOwnProperty(string);

const user = {
    name: "Wlad",
    lastName: "Bader",
    age: 26,
}

console.log(hasProp("county", user));
//7.4

//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).

//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElecEquip(power, name) {
  this.power = power;
  this.name = name;
  this.connected = "";
  this.switcher = function (str) {
    if (+str == 1) {
      this.connected = true;
      console.log(`${name} connected: ${this.connected}`);
    } else {
      this.connected = false;
      console.log(`${name} connected: ${this.connected}`);
    }
  };
  this.getPower = function () {
    console.log(`${name}'s power is ${power}`);
  };
}

const computer = new ElecEquip("220 W", "Computer");
const microwave = new ElecEquip("380 W", "Microwave");
const iron = new ElecEquip("220 W", "Iron");

iron.switcher("1");

computer.getPower();
microwave.getPower();

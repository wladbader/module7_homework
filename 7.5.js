//7.5

//Переписать консольное приложение из предыдущего юнита на классы.

class ElecEquip {
  constructor(power, name) {
    this.power = power;
    this.name = name;
    this.isConnected = false;
    this.getPower = function () {
      console.log(`${name}'s power is ${power}`);
    };
  }

  turnedOn(str) {
    if (+str == 1) {
      this.isConnected = true;
    }

    console.log(`Device connected: ${this.isConnected}`);
  }
}

class forDomesticUse extends ElecEquip {
  switcher(str) {
    super.turnedOn(str);
  }

  constructor(power, name, color) {
    super(power, name);
    this.color = color;
    this.getColor = function () {
      console.log(`${name}'s color is ${this.color}`);
    };
  }
}

const computer = new forDomesticUse();
const microwave = new forDomesticUse("380 W", "Microwave");
const iron = new forDomesticUse("220 W", "Iron", "green");

iron.switcher("1");

iron.getPower();
microwave.getPower();

iron.getColor();

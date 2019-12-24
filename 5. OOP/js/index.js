class Dog {
  constructor(_name, _breed, _age, _energy) {
    this._name = _name;
    this._breed = _breed;
    this._age = _age;
    this._energy = _energy;
  }

  ShowDog() {
    console.log(
      `Name: ${this._name} \nBreed: ${this._breed} \nAge: ${this._age} \nEnergy: ${this._energy}`
    );
  }

  SetName(name) {
    if (name === this._name) {
      console.log("The same names!");
    } else {
      this._name = name;
    }
  }
  GetBreed() {
    return this._breed;
  }

  DogPlay(energy) {
    console.log(`${this._name} is plaing...`);
    this._energy -= energy;
    if (this._energy <= 0) {
      this.DogDie();
    }
  }

  DogEat(eat) {
    console.log(`${this._name} is eating...`);
    this._energy += eat;
    if (this._energy > 100) {
      this.DogDie();
    }
  }

  DogSleep() {
    console.log(`${this._name} is speeping...`);
    setTimeout(() => {
      this._energy += 50;
    }, 2000);
  }

  DogDie() {
    console.log(`${this._name} is die!`);
  }
}

class HanterDog extends Dog {
  constructor(_name, _breed, _age, _energy, power) {
    super(_name, _breed, _age, _energy);
    this.power = power;
  }

  Hunt(energy) {
    this._energy -= energy;
    this.power -= 10;
  }
  ShowDog() {
    console.log(
      `Name: ${this._name} \nBreed: ${this._breed} \nAge: ${this._age} \nEnergy: ${this._energy} \nPower: ${this.power}`
    );
  }
}

let rex = new HanterDog("Rex", "Russian Fast", 4, 99, 50);
rex.ShowDog();
rex.DogPlay(30);
rex.ShowDog();
rex.DogEat(20);
rex.ShowDog();
rex.Hunt(20);
rex.ShowDog();
rex.DogSleep();
setTimeout(() => {
  rex.ShowDog();
}, 3000);

// let Bobik = new Dog("Bobik", "Taxa", 3, 100);
// Bobik.ShowDog();
// Bobik.SetName("Barsik");
// Bobik.ShowDog();
// console.log(Bobik.GetBreed());
// Bobik.DogPlay(50);
// Bobik.ShowDog();
// Bobik.DogEat(10);
// Bobik.DogPlay(50);
// Bobik.ShowDog();
// Bobik.DogSleep();
// Bobik.ShowDog();
// Bobik.DogPlay(20);

// localStorage.setItem("Name", Bobik._name);
// localStorage.setItem("Breed", Bobik._breed);
// localStorage.setItem("Age", Bobik._age);
// localStorage.setItem("Energy", Bobik._energy);

// nameLS = localStorage.getItem("Name");

// console.log("Name from LS =>", nameLS);

localStorage.clear();

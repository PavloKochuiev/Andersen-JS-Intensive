class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(name) {
    const isValidName = name.length > 0 && name.length <= 50 && typeof name === 'string';

    if (!isValidName) {
      throw new Error('Неверное название бренда! Введите строку от 1 до 50 символов включительно!');
    }

    this.#brand = name;
  }

  get brand() {
    return this.#brand;
  }

  set model(name) {
    const isValidName = name.length > 0 && name.length <= 50 && typeof name === 'string';

    if (!isValidName) {
      throw new Error('Неверное название модели! Введите строку от 1 до 50 символов включительно!');
    }

    this.#brand = name;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(year) {
    const isValidYear = typeof year === 'number' && year >= 1900 && year <= new Date().getFullYear();

    if (!isValidYear) {
      throw new Error('Неверный год! Введите число от 1900 до текущего года включительно');
    }

    this.#yearOfManufacturing = year;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(speed) {
    const isValidSpeed = typeof speed === 'number' && speed >= 100 && speed <= 300;

    if (!isValidSpeed) {
      throw new Error('Неправильная максимальная скорость! Введите число от 100 до 300 км/ч!');
    }

    this.#maxSpeed = speed;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(fuel) {
    const isValidFuel = typeof fuel === 'number' && fuel >= 5 && fuel <= 20;

    if (!isValidFuel) {
      throw new Error('Превышен максимальный объём бака!');
    }

    this.#maxFuelVolume = fuel;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number') {
      throw new Error('Неправильное значение расхода топлива');
    }

    this.#fuelConsumption = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена!');
    }

    return (this.#isStarted = true);
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина еще не заведена');
    }

    return (this.#isStarted = false);
  }

  fillUpGasTank(fuel) {
    const isValidFuelValue = typeof fuel === 'number' && !isNaN(fuel) && isFinite(fuel) && fuel > 0;

    if (!isValidFuelValue) {
      throw new Error('Неверное количество топлива');
    } else if (!this.#maxFuelVolume) {
      throw new Error('Не указано максимальное количество топлива');
    } else if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак заполнен');
    } else {
      this.#currentFuelVolume += fuel;

      return this.#maxFuelVolume;
    }
  }

  drive(speed, hours) {
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error('Неправильная скорость!');
    }

    if (!Number.isFinite(hours) || hours <= 0) {
      throw new Error('Неправильное количество часов!');
    }

    if (speed > this.#maxSpeed) {
      throw new Error("Машина не может так быстро ехать!");
    }

    if (!this.#isStarted) {
      throw new Error('Машину нужно завести!');
    }

    const maxDistance = (this.#currentFuelVolume / this.#fuelConsumption) * 100;
    const distance = speed * hours;

    if (distance > maxDistance) {
      throw new Error('Недостаточно топлива!');
    }

    this.#mileage += distance;
    this.#currentFuelVolume -= (this.#fuelConsumption * distance) / 100;
  }
}

module.exports = { Car };

class Complex {
  private real: number;
  private imaginary: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex: Complex): Complex {
    return new Complex(
      this.real + complex.real,
      this.imaginary + complex.imaginary
    );
  }

  subtract(complex: Complex): Complex {
    return new Complex(
      this.real - complex.real,
      this.imaginary - complex.imaginary
    );
  }

  modul(): number {
    return Math.sqrt(this.real ^ (2 + this.imaginary) ^ 2);
  }

  toString() {
    console.log(`real: ${this.real} imaginary: ${this.imaginary}`);
  }
}

const com1 = new Complex(7,9);
const com2 = new Complex(4,1);
const addRes = com1.add(com2);
addRes.toString();
const subRes = addRes.subtract(com1);
subRes.toString();
console.log(`modul: ${subRes.modul()}`);
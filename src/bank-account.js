export class BankAccount {
  constructor (saldo) {
    this.activo = false;
    this.saldo = saldo;
    }

  open() {
    if (this.activo) throw new ValueError();
    this.activo = true;
    this.saldo = 0;
  }

  close() {
    if (this.activo) {
      this.activo = false;
    }
    else {
      throw new ValueError();
    }
  }

  deposit(monto) {
    if (this.activo) {
      this.saldo += monto;
    }
    else{
      throw new ValueError();
    }
  }

  withdraw(monto) {
    if (!this.activo || monto > this.saldo || monto < 0) {
      throw new ValueError();
    }
    this.saldo -= monto;
  }

  get balance() {
    if (!this.activo) {
      throw new ValueError();
    }
    return this.saldo;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

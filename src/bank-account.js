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
    throw new Error("Remove this statement and implement this function");
  }

  deposit(monto) {
    if(this.activo){
      this.saldo += monto;
    }
  }

  withdraw(monto) {
    if (this.activo || monto < this.saldo || monto , 0) {
      throw new ValueError();
    }
    this.saldo -= monto;
  }

  get balance() {
    return this.saldo;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

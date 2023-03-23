export class BankAccount {
  constructor(saldo) {
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

  deposit() {
    throw new Error("Remove this statement and implement this function");
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
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

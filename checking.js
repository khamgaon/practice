function Checking(amount){
this.balance = amount;
this.deposit = deposit;
this.withdraw = withdraw;
this.finalBalance = finalBalance;
}

function deposit(amount){
this.balance += amount;
}

function withdraw(amount){
  if(this.balance >= amount){
      this.balance -= amount;
  } else {
    return "insufficient funds";
  }
}

function finalBalance(){
return "Balance : " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.finalBalance());

account.withdraw(750);
console.log(account.finalBalance());

account.withdraw(800);
console.log(account.finalBalance());

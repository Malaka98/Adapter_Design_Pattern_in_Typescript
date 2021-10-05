interface ICreditCard{

    giveBankDetails() : void;
    getCreditCard() : String;

}
//adaptee class
class BankDetails{
  private _bankName: String | null | undefined;
  private _accHolderName: String | null | undefined;  
  private _accNumber: number | null | undefined;

  public setBankName(name: String): void {
    this._bankName = name;
  }
  public getBankName(): String | null | undefined{
    return this._bankName;
  }

  public getAccHolderName(): String | null | undefined{
    return this._accHolderName
  }

  public setAccHolderName(name: String): void {
    this._accHolderName = name;
  }

    public getAccNumber(): number | null | undefined{
    return this._accNumber
  }

  public setAccNumber(name: number): void {
    this._accNumber = name;
  }

}

class BankCustomer extends BankDetails implements ICreditCard { //Adapter class

  giveBankDetails() : void{

    this.setBankName("abc")
    this.setAccHolderName("xyz")
    this.setAccNumber(12345678910)

  }

  getCreditCard(): String {

    return ("Issuing the credit card: -" + this.getAccHolderName() + "/" + this.getAccNumber())
  }
}



const obj: ICreditCard = new BankCustomer();    //client side. 

obj.giveBankDetails()

console.log(obj.getCreditCard())

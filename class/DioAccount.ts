export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valDeposit: number): void => {
    this.balance = this.balance + valDeposit
  }

  withdraw = (valWithDraw: number): void => {
    if (this.validateStatus() && this.balance >= valWithDraw)
      this.balance = this.balance - valWithDraw
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalance = (valSet: number): void => {
    this.balance = this.balance + valSet
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

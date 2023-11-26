import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SalaryAccount } from './class/SalaryAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Marcelo', 10)

peopleAccount.deposit(100)
peopleAccount.withdraw(20)
peopleAccount.setName('Marcelo teste')
console.log(peopleAccount.getName())
peopleAccount.getBalance()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

companyAccount.deposit(100)
companyAccount.withdraw(20)
companyAccount.getLoan(30)
companyAccount.setName('Dio teste')
console.log(companyAccount.getName())
companyAccount.getBalance()
console.log(companyAccount)

const salaryAccount: SalaryAccount = new SalaryAccount('Lucas', 20)

salaryAccount.deposit(100)
salaryAccount.withdraw(20)
salaryAccount.setName('Lucas teste')
console.log(salaryAccount.getName())
salaryAccount.getBalance()
console.log(salaryAccount)
// 
// companyAccount.deposit()
// console.log(companyAccount)
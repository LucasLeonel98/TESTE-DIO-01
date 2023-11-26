import { DioAccount } from "./DioAccount";

export class SalaryAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valDeposit: number): void => {
        this.setBalance(valDeposit + 10)
    }
}
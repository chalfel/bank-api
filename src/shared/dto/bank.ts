export class BankDTO {
  name: string;

  constructor (data: Partial<BankDTO>) {
    Object.assign(this, data)
  }
}

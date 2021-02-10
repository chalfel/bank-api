import { Column, Entity } from 'typeorm'
import { Base } from './Base'

@Entity('bank')
export class Bank extends Base {
  @Column()
  name: string;

  constructor (data: Partial<Bank>) {
    super(data)
    Object.assign(this, data)
  }
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bank } from './Bank'
import { Base } from './Base'
import { User } from './User'

@Entity('account')
export class Account extends Base {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Bank)
  bank: Bank;

  @Column()
  agency: string;

  @Column()
  number: string;

  @ManyToOne(() => User)
  user: User;

  constructor (data: Partial<Account>) {
    super(data)
    Object.assign(this, data)
  }
}

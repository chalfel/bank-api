import { Column, Entity, ManyToOne } from 'typeorm'
import { Base } from './Base'
import { PixKey } from './PixKey'
import { User } from './User'

@Entity('transaction')
export class Transaction extends Base {
  @ManyToOne(() => User)
  sender: User;

  @ManyToOne(() => User)
  receiver: User;

  @ManyToOne(() => PixKey)
  pixKey: PixKey;

  @Column()
  value: number;

  @Column({ name: 'is_valid' })
  isValid: boolean;

  constructor (data: Partial<Transaction>) {
    super(data)
    Object.assign(this, data)
  }
}

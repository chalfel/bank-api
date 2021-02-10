import { Column, Entity, ManyToOne } from 'typeorm'
import { Bank } from './Bank'
import { Base } from './Base'
import { User } from './User'

@Entity('pix_key')
export class PixKey extends Base {
  @ManyToOne(() => User)
  user: User;

  @Column()
  kind: string;

  @Column()
  value: string;

  @ManyToOne(() => Bank)
  bank: Bank;

  constructor (data: Partial<PixKey>) {
    super(data)
    Object.assign(this, data)
  }
}

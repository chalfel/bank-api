import { Entity, Column } from 'typeorm'
import { Base } from './Base'

@Entity({ name: 'users' })
export class User extends Base {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  constructor (data: Partial<User>) {
    super(data)
    Object.assign(this, data)
  }
}

import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'created_at', default: new Date().toTimeString() })
  createdAt: string;

  @Column({ name: 'updated_at', default: new Date().toTimeString() })
  updatedAt: string;

  constructor (data: Partial<Base>) {
    Object.assign(this, data)
  }
}

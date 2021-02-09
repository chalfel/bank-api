import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUser1612731363171 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users"
            (
              id serial primary key,
              first_name varchar not null
            )`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                            DROP TABLE "users"
                            `)
  }
}

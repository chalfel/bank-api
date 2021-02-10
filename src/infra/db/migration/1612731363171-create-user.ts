import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUser1612731363171 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users"
            (
              id varchar(255) primary key,
              first_name varchar(255) not null,
              last_name varchar(255) not null,
              created_at date not null default now(),
              updated_at date not null default now()
            )`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                            DROP TABLE "users"
                            `)
  }
}

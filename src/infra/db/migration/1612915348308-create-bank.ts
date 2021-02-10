import { MigrationInterface, QueryRunner } from 'typeorm'

export class createBank1612915348308 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                              CREATE TABLE bank (
                                id varchar(255) primary key,
                                name varchar(255) not null,
                                created_at date not null default now(),
                                updated_at date not null default now()
                              )
                              `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                            DROP TABLE bank
                            `)
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    isFixa: boolean;

    @Column('decimal')
    valor: number;

    @Column()
    vencimento: Date;

    @Column({nullable: true})
    pagoEm: Date
}
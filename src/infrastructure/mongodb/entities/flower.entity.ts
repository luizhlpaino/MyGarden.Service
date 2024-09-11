import { UUID } from 'crypto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class FlowerEntity {
    @PrimaryGeneratedColumn()
    id: UUID;

    @Column()
    name: string;

    @Column()
    color: string;

    @Column()
    plantedAt: Date;
}
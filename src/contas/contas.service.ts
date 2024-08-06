import { UpdateContasDto } from './dto/update-conta.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contas } from './contas.entity';
import { Repository } from 'typeorm';
import { CreateContasDto } from './dto/create-conta.dto';

@Injectable()
export class ContasService {
    constructor(
        @InjectRepository(Contas)
        private contasRepository: Repository<Contas>,
    ){}

    create(createContasDto: CreateContasDto): Promise<Contas> {
        const conta = this.contasRepository.create(createContasDto);
        return this.contasRepository.save(conta);
    }

    findAll(): Promise<Contas[]> {
        return this.contasRepository.find();
    }

    findOne(id: number): Promise<Contas> {
        return this.contasRepository.findOneBy({ id });
    }

    async update(id: number, updateContasDto: UpdateContasDto): Promise<Contas> {
        await this.contasRepository.update(id, updateContasDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.contasRepository.delete(id)
    }
}

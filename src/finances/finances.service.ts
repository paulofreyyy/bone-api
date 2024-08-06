import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './finances.entity';
import { CreateFinanceDto } from './dtos/create-finance.dto';
import { UpdateFinanceDto } from './dtos/update-finance.dto';

@Injectable()
export class FinancesService {
    constructor(
        @InjectRepository(Finance)
        private financesRepository: Repository<Finance>,
    ) {}

    create(createFinanceDto: CreateFinanceDto): Promise<Finance> {
        const finance = this.financesRepository.create(createFinanceDto);
        return this.financesRepository.save(finance);
    }

    findAll(): Promise<Finance[]> {
        return this.financesRepository.find();
    }

    findOne(id: number): Promise<Finance> {
        return this.financesRepository.findOneBy({ id });
    }

    async update(id: number, updateFinanceDto: UpdateFinanceDto): Promise<Finance> {
        await this.financesRepository.update(id, updateFinanceDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.financesRepository.delete(id);
    }
}

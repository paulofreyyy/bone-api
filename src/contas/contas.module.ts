import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contas } from './contas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contas])],
  controllers: [ContasController],
  providers: [ContasService]
})
export class ContasModule {}

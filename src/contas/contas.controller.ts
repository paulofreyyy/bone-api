import { ContasService } from './contas.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateContasDto } from './dto/create-conta.dto';
import { UpdateContasDto } from './dto/update-conta.dto';

@Controller('contas')
export class ContasController {
    constructor(private readonly contasService: ContasService) {}

    @Post()
    create(@Body() CreateContasDto: CreateContasDto){
        return this.contasService.create(CreateContasDto);
    }

    @Get()
    findAll(){
        return this.contasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.contasService.findOne(+id);
    }

    @Patch()
    update(@Param('id') id: string, @Body() updateContasDto: UpdateContasDto){
        return this.contasService.update(+id, updateContasDto);
    }

    @Delete()
    remove(@Param("id") id: string){
        return this.contasService.remove(+id);
    }
}

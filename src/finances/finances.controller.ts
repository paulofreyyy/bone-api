import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { CreateFinanceDto } from './dtos/create-finance.dto';
import { UpdateFinanceDto } from './dtos/update-finance.dto';

@Controller('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Post()
  create(@Body() createFinanceDto: CreateFinanceDto) {
    return this.financesService.create(createFinanceDto);
  }

  @Get()
  findAll() {
    return this.financesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceDto: UpdateFinanceDto) {
    return this.financesService.update(+id, updateFinanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.financesService.remove(+id);
  }
}

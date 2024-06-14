import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Request } from 'express';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll(@Res({ passthrough: true }) response) {
    //Nest detects when the handler is using either @Res() or @Next(), 
    //indicating you have chosen the library - specific option.If both 
    //approaches are used at the same time, the Standard approach is 
    //automatically disabled for this single route and will no longer 
    //work as expected.To use both approaches at the same time(for example,
    //by injecting the response object to only set cookies / headers but 
    //still leave the rest to the framework), you must set the passthrough 
    //option to true in the @Res({ passthrough: true }) decorator.
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: Request) {    
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}

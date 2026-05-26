import { PartialType } from "@nestjs/mapped-types";
import { cadastrarClienteDto } from "./cliente.dto";

export class EditarClienteDto extends PartialType(cadastrarClienteDto){}


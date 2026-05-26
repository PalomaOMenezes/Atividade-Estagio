import { ClienteController } from "./cliente.controller";
import { ClienteService } from "./cliente.service";
import { ClienteRepository } from "./clientes.repository";
import { Module } from '@nestjs/common';

@Module({
    controllers: [ClienteController],
    providers: [ClienteService, ClienteRepository],
})
export class ClientesModule{}
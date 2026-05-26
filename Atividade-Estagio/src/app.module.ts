import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/cliente.module';

@Module({
  imports: [ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

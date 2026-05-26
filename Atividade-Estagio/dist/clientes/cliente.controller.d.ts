import { ClienteService } from "./cliente.service";
import { cadastrarClienteDto } from "./dto/cliente.dto";
import type { ApiResponse } from "../common/api.reponse";
import { Cliente } from "./cliente.entity";
import { EditarClienteDto } from "./dto/editar-cliente.dto";
import { LoginDto } from './dto/login.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    cadastrar(dto: cadastrarClienteDto): Promise<ApiResponse<Cliente>>;
    login(dto: LoginDto): Promise<ApiResponse<string>>;
    listar(pagina?: string, limite?: string, filtroNome?: string): Promise<ApiResponse<Cliente[]>>;
    obterHistorico(): ApiResponse<string[]>;
    editar(id: string, dto: EditarClienteDto): Promise<ApiResponse<Cliente>>;
    excluir(id: string): Promise<void>;
}

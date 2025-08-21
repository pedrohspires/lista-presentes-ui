import type { baseDTO } from "./baseEntity.d";
import type { tipoChavePixListagem } from "./tipoChavePix";
import type { usuarioListagem } from "./usuario.d";

export type listaListagem = {
    descricao: string;
    usuarioId: number;
    usuario?: usuarioListagem;
    uuid: string;
    chavePix: string;
    valorPix: number | null;
    tipoChavePixId: tipoChavePixListagem | null;
} & baseDTO;
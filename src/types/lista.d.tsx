import type { baseDTO } from "./baseEntity.d";
import type { usuarioListagem } from "./usuario.d";

export type listaListagem = {
    descricao: string;
    usuarioId: number;
    usuario?: usuarioListagem;
    uuid: string;
} & baseDTO;
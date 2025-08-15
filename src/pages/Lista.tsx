import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import type { listaListagem } from "../types/lista.d";
import { getRequest } from "../utils/requests";

function Lista() {
    const [searchParams] = useSearchParams();
    const usuarioUUID = searchParams.get("proprietario");

    const [lista, setLista] = useState<listaListagem>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getUsuario();
    }, []);

    async function getUsuario() {
        const response = await getRequest<listaListagem>(`/Lista/ByUUID/${usuarioUUID}`);
        if (response.status == 200)
            setLista(response.dados);

        setLoading(false);
    }

    if (loading)
        return <LoadingPage />

    return (
        <div className='w-screen h-screen bg-[#F8F9FA]'>
            <div>
                <h1>Olá, seja muito bem vindo(a)!</h1>
                <h2>Esta é a lista de presentes de {lista?.usuario?.nome}!</h2>
            </div>
        </div>
    )
}

export default Lista
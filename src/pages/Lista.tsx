import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import type { listaListagem } from "../types/lista.d";
import { formatarChavePix, formatarDinheiro } from "../utils/formatar";
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
        <div className='w-screen h-screen bg-[#F8F9FA] text-[#2C3E50] pt-12'>
            <div className="space-y-6 max-w-4xl mx-auto px-4">
                <p className="text-center text-lg font-semibold">
                    <h1 className="text-center">Olá, seja muito bem vindo(a)!</h1>
                </p>

                <p className="text-center">
                    <h2>
                        Esta é a lista de presentes de <br />
                        <span className="font-bold">{lista?.usuario?.nome}!</span>
                    </h2>
                </p>

                <p className="text-center">
                    <h2>Você pode selecionar um ou mais itens para presentear em seu <span className="font-bold">chá de bebê!</span></h2>
                    <h2>Além disso, você pode usar o QRCode ou o Pix abaixo para presentear com <span className="font-bold">{formatarDinheiro(1000)}</span> ou o que o seu coração mandar!</h2>
                </p>

                <div>
                    <img src="src\assets\qrcode.png" alt="QRCode Pix" className="w-1/3 mx-auto" />

                    <p className="text-center mt-2">
                        Ou pela chave: <br />
                        <span className="font-bold">{formatarChavePix(lista?.chavePix || "", "cpf")}</span>
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-center">
                        Selecione abaixo um ou mais presentes e confirme!<br />
                        Alguns presentes podem ser repetidos.
                    </h2>
                </div>

                <div className="w-full h-12 bg-white rounded-lg border border-[#2C3E50] drop-shadow-sm">

                </div>
            </div>
        </div>
    )
}

export default Lista
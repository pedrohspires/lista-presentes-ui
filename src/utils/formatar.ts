export function formatarDinheiro(valor?: number | null) {
    if (!valor) return "R$0,00"

    return 'R$' + valor.toLocaleString('pt-BR')
}

export function formatCPF(cpf: string) {
    const digits = (cpf ?? "").replace(/\D/g, "").slice(0, 11);
    return digits
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
}

export function formatarChavePix(chavePix: string, tipoChavePix: string) {
    if (tipoChavePix == "cpf") return formatCPF(chavePix);

    return chavePix;
}
export interface PizzaInterface {
    codigo:number;
    nome: string;
    descricao: string;
    tamanho?: string;
    preco: number;
    imagemURL: string;
    tempoPreparo: string;
    disponivel: boolean;
}

export enum Tamanhos {
    PEQUENA = 'Pequena',
    MEDIA = 'Média',
    GRANDE = 'Grande',
    GIGANTE = 'Gigante'
}


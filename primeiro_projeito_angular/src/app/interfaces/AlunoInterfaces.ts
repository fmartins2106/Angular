export interface AlunoInterface {
    matricula: number;
    nome: string;
    email: string;
    cadastro: boolean;
    cursos: string[];
    imagemUrl:string;
    notas: number[];
    status: boolean;
    media?:number;
}

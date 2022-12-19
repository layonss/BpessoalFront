import Tema from './Tema'
interface Postagem{
    id: number
    titulo:string
    texto: string
    tema?: Tema| null
    data: string
}
export default Postagem;
import { TaskInterface } from './TaskInterface'

export interface ValidadorInterface {
  valCamposNaoNulos: (nome: string, descricao: string) => boolean
  valTarefaJaExistente: (nome: string, tasks: TaskInterface[]) => boolean
}

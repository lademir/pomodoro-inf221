import { TaskInterface } from '../../core/TaskInterface'
import { ValidadorInterface } from '../../core/ValidadorInterface'

export class Validador implements ValidadorInterface {
  private constructor() {}

  static create() {
    return new Validador()
  }

  valCamposNaoNulos(nome: string, descricao: string): boolean {
    const naoNulos = !(nome.length > 0 && descricao.length > 0)

    return naoNulos
  }
  valTarefaJaExistente(nome: string, tasks: TaskInterface[]): boolean {
    const tarefaExistente = tasks.some((task) => task.nome === nome)

    return tarefaExistente
  }
}

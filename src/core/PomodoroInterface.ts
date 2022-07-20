import { TaskInterface } from './TaskInterface'
import { ValidadorInterface } from './ValidadorInterface'

export interface PomodoroInterface {
  time: number
  shortBreak: number
  longBreak: number
  tarefas: TaskInterface[]
  validador: ValidadorInterface

  adicionarTarefa: (nome: string, descricao: string) => void
  editarTarefa: (
    novoNome: string,
    novaDescricao: string,
    task: TaskInterface
  ) => void
  validarTarefa: (nome: string, descricao: string) => boolean

  iniciar: () => void
  pausar: () => void
  retomar: () => void
  finalizar: () => void
}

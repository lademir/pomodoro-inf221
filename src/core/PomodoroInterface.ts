// import { NoException } from '../domain/useCases/exceptions/NoException'
import { TaskAlreadyExistentException } from '../domain/useCases/exceptions/TaskAlreadyExistentException'
import { TaskWithNullFieldsException } from '../domain/useCases/exceptions/TaskWithNullFieldsException'
import { TaskInterface } from './TaskInterface'
import { ValidadorInterface } from './ValidadorInterface'

export interface PomodoroInterface {
  time: number
  shortBreak: number
  longBreak: number
  tarefas: TaskInterface[]
  validador: ValidadorInterface
  state: 'naoIniciado' | 'emAndamento' | 'pausado' | 'finalizado'

  adicionarTarefa: (nome: string, descricao: string) => void
  editarTarefa: (
    novoNome: string,
    novaDescricao: string,
    task: TaskInterface
  ) => void
  removeTask: (nome: string) => void

  validarCampos: (
    nome: string,
    descricao: string
  ) => TaskWithNullFieldsException | undefined
  validarExistencia: (nome: string) => TaskAlreadyExistentException | undefined

  getTask: (nome: string) => TaskInterface | undefined

  iniciar: () => void
  pausar: () => void
  retomar: () => void
  finalizar: () => void
}

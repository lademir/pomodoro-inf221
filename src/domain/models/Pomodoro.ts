import { PomodoroInterface } from '../../core/PomodoroInterface'
import { TaskInterface } from '../../core/TaskInterface'
import { ValidadorInterface } from '../../core/ValidadorInterface'
import { TaskAlreadyExistentException } from '../useCases/exceptions/TaskAlreadyExistentException'
import { TaskWithNullFieldsException } from '../useCases/exceptions/TaskWithNullFieldsException'
import { Task } from './Task'
import { Validador } from './Validador'

export class Pomodoro implements PomodoroInterface {
  #time: number
  #shortBreak: number
  #longBreak: number
  #tarefas: TaskInterface[]
  #validador: ValidadorInterface = Validador.create()
  #state: 'naoIniciado' | 'emAndamento' | 'pausado' | 'finalizado' =
    'naoIniciado'

  private constructor(
    tarefas: TaskInterface[] = [],
    time = 25,
    shortBreak = 5,
    longBreak = 15
  ) {
    ;(this.#time = time), (this.#shortBreak = shortBreak)
    this.#longBreak = longBreak
    this.#tarefas = tarefas
  }

  static create() {
    return new Pomodoro()
  }

  adicionarTarefa(nome: string, descricao: string) {
    const novaTarefa: TaskInterface = Task.create(nome, descricao)
    this.#tarefas.push(novaTarefa)
  }

  editarTarefa(novoNome: string, novaDescricao: string, task: TaskInterface) {
    task.changeName(novoNome)
    task.changeDescription(novaDescricao)
  }

  validarTarefa(nome: string, descricao: string) {
    const camposNaoNulos = this.#validador.valCamposNaoNulos(nome, descricao)
    const tarefaJaExistente = this.#validador.valTarefaJaExistente(
      nome,
      this.#tarefas
    )

    if (camposNaoNulos) {
      return new TaskWithNullFieldsException()
    }
    if (tarefaJaExistente) {
      return new TaskAlreadyExistentException()
    }
  }

  iniciar() {
    this.#state = 'emAndamento'
  }
  pausar() {
    this.#state = 'pausado'
  }
  retomar() {
    this.#state = 'emAndamento'
  }
  finalizar() {
    this.#state = 'finalizado'
  }

  getTask(name: string) {
    return this.#tarefas.find((task) => task.nome === name)
  }

  get time() {
    return this.#time
  }

  get shortBreak() {
    return this.#shortBreak
  }

  get longBreak() {
    return this.#longBreak
  }

  get tarefas() {
    return this.#tarefas
  }

  get validador() {
    return this.#validador
  }
}

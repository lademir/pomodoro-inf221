import { PomodoroInterface } from '../../core/PomodoroInterface'
import { TaskInterface } from '../../core/TaskInterface'
import { Validador } from '../models/Validador'
import { TaskWithNullFieldsException } from './exceptions/TaskWithNullFieldsException'

export class ManageTask {
  validador = Validador.create()

  add(task: TaskInterface, pomodoro: PomodoroInterface) {
    if (this.validador.valCamposNaoNulos(task.nome, task.descricao)) {
      throw new TaskWithNullFieldsException()
    }

    pomodoro.adicionarTarefa(task.nome, task.descricao)
  }
}

import { PomodoroInterface } from '../../core/PomodoroInterface'
import { TaskInterface } from '../../core/TaskInterface'

export class ManageTask {
  add(task: TaskInterface, pomodoro: PomodoroInterface) {
    const validation = pomodoro.validarTarefa(task.nome, task.descricao)
    if (validation) {
      throw validation
    }

    pomodoro.adicionarTarefa(task.nome, task.descricao)
  }
}

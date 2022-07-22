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

  changeTaskName(
    newName: string,
    task: TaskInterface,
    pomodoro: PomodoroInterface
  ) {
    const validation = pomodoro.validarTarefa(newName, task.descricao)
    if (validation) {
      throw validation
    }

    task.changeName(newName)
  }

  changeTaskDescription(newDescription: string, task: TaskInterface) {
    task.changeDescription(newDescription)
  }
}

import { PomodoroInterface } from '../../core/PomodoroInterface'
import { TaskInterface } from '../../core/TaskInterface'
import { UnexistentTaskException } from './exceptions/UnexistentTaskException'

export class ManageTask {
  add(task: TaskInterface, pomodoro: PomodoroInterface) {
    const notNullFields = pomodoro.validarCampos(task.nome, task.descricao)
    const nonExistentTask = pomodoro.validarExistencia(task.nome)
    if (notNullFields) {
      throw notNullFields
    }
    if (nonExistentTask) {
      throw nonExistentTask
    }

    pomodoro.adicionarTarefa(task.nome, task.descricao)
  }

  changeTaskName(
    newName: string,
    task: TaskInterface,
    pomodoro: PomodoroInterface
  ) {
    const validation = pomodoro.validarCampos(newName, task.descricao)
    if (validation) {
      throw validation
    }

    task.changeName(newName)
  }

  changeTaskDescription(
    newDescription: string,
    task: TaskInterface,
    pomodoro: PomodoroInterface
  ) {
    const validation = pomodoro.validarCampos(task.nome, newDescription)
    if (validation) {
      throw validation
    }

    task.changeDescription(newDescription)
  }

  finish(task: TaskInterface) {
    task.finalizar()
  }

  remove(nome: string, pomodoro: PomodoroInterface) {
    const taskOrException = pomodoro.getTask(nome)

    if (!taskOrException) {
      throw new UnexistentTaskException()
    }

    pomodoro.removeTask(nome)
  }
}

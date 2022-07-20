export class TaskWithNullFieldsException extends Error {
  constructor(msg?: string) {
    super(msg)

    Object.setPrototypeOf(this, TaskWithNullFieldsException.prototype)
  }

  throwException() {
    if (this.message) {
      return this.message
    }
    return 'Tarefa com algum campo invalido'
  }
}

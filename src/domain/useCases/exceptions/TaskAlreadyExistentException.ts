export class TaskAlreadyExistentException extends Error {
  constructor(msg?: string) {
    super(msg)
  }

  throwException() {
    if (this.message) {
      return this.message
    }
    return 'Tarefa ja existente'
  }
}

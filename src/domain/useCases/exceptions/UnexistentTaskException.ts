export class UnexistentTaskException extends Error {
  constructor(msg?: string) {
    super(msg)
  }

  throwException() {
    if (this.message) {
      return this.message
    }
    return 'Tarefa nao existente'
  }
}

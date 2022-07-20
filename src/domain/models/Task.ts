import { TaskInterface } from '../../core/TaskInterface'

export class Task implements TaskInterface {
  #nome: string
  #descricao: string
  #finalizada: boolean

  private constructor(nome: string, descricao: string, finalizada = false) {
    this.#nome = nome
    this.#descricao = descricao
    this.#finalizada = finalizada
  }

  static create(nome: string, descricao: string) {
    return new Task(nome, descricao)
  }

  get nome() {
    return this.#nome
  }

  get descricao() {
    return this.#descricao
  }

  get finalizada() {
    return this.#finalizada
  }

  finalizar() {
    this.#finalizada = true
  }

  changeName(novoNome: string) {
    this.#nome = novoNome
  }

  changeDescription(newDescription: string) {
    this.#descricao = newDescription
  }
}

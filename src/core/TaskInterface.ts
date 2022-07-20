export interface TaskInterface {
  nome: string
  descricao: string
  finalizada: boolean

  finalizar: () => void
  changeName: (novoNome: string) => void
  changeDescription: (newDescription: string) => void
}

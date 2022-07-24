import { PomodoroInterface } from '../../core/PomodoroInterface'
import { Pomodoro } from '../../domain/models/Pomodoro'

describe('ManagePomodoroUsecase', () => {
  let pomodoroSUT: PomodoroInterface

  beforeAll(() => {
    pomodoroSUT = Pomodoro.create()
  })

  it('should start with non-initialized state', () => {
    expect(pomodoroSUT.state).toBe('naoIniciado')
  })

  it('should change pomodoro state', () => {})
})

import { PomodoroInterface } from "../../core/PomodoroInterface";
import { Pomodoro } from "../../domain/models/Pomodoro";
import { Task } from "../../domain/models/Task";
import { TaskAlreadyExistentException } from "../../domain/useCases/exceptions/TaskAlreadyExistentException";
import { TaskWithNullFieldsException } from "../../domain/useCases/exceptions/TaskWithNullFieldsException";
import { ManageTask } from "../../domain/useCases/manageTask";

// adicionar, remover, editar e finalizar tarefa

const TASK_NAME = "mockTask";
const TASK_DESCRIPTION = "mockDescription";

describe('ManageTaskUsecase', () => {

    let pomodoroSUT: PomodoroInterface;

    beforeEach(() => {
        pomodoroSUT = Pomodoro.create();
    });

    //  ADICIONAR

    it('should add new task to pomodoro', () => {
        const manageTask = new ManageTask();
        expect(pomodoroSUT.tarefas.length).toBe(0);

        const mockTask = Task.create(TASK_NAME, TASK_DESCRIPTION);
        manageTask.add(mockTask, pomodoroSUT);

        expect(pomodoroSUT.tarefas.length).toBe(1);
    });

    it('should not add task with null description', () => {
        const manageTask = new ManageTask();

        const mockTaskNullDescription = Task.create(TASK_NAME, "");
        expect(() => manageTask.add(mockTaskNullDescription, pomodoroSUT)).toThrowError(TaskWithNullFieldsException);
    });

    it('should not add task with null name', () => {
        const manageTask = new ManageTask();

        const mockTaskNullDescription = Task.create("", TASK_DESCRIPTION);
        expect(() => manageTask.add(mockTaskNullDescription, pomodoroSUT)).toThrowError(TaskWithNullFieldsException);
    });

    it('should not add task with null fields', () => {
        const manageTask = new ManageTask();

        const mockTaskNullDescription = Task.create("", "");
        expect(() => manageTask.add(mockTaskNullDescription, pomodoroSUT)).toThrowError(TaskWithNullFieldsException);
    });

    it('should not add repeated tasks', () => {
        const manageTask = new ManageTask();

        expect(pomodoroSUT.tarefas.length).toBe(0);

        const mockTask = Task.create(TASK_NAME, TASK_DESCRIPTION);
        manageTask.add(mockTask, pomodoroSUT);

        expect(pomodoroSUT.tarefas.length).toBe(1);

        expect(() => manageTask.add(mockTask, pomodoroSUT)).toThrowError(TaskAlreadyExistentException);
    });

    // EDITAR

    // FINALIZAR

    // REMOVER
});
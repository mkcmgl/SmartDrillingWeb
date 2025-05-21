/**
 * @module geotoolkit/util/taskscheduler
 */
import { Cancel } from '@int/geotoolkit/util/Cancel';
/**
 * Define an interface for Task
 * @interface
 */
export declare abstract class ITask {
    /**
     * Creates promise for the current task
     * @returns a promise
     */
    abstract toPromise(): Promise<any>;
    /**
     * Return object to cancel task execution
     */
    abstract getCancel(): Cancel;
    /**
     * Run the task
     * @param success a callback function to be call than task is competed
     * @param fail a callback function to be call than task is fail
     */
    abstract run(success: (task: ITask) => void, fail: (task: ITask) => void): void;
    /**
     * Returns task id
     */
    abstract getId(): number;
}
/**
 * A simple task scheduler to control parallel tasks execution
 */
export declare class TaskScheduler {
    constructor(options?: TaskScheduler.Options);
    /**
     * Return id of the last task
     */
    getLastTaskId(): number;
    /**
     * Sets number of running in parallel tasks
     * @param count number of parallel tasks
     * @returns this
     */
    setNumberOfParallelTasks(count: number): this;
    /**
     * Gets number of running in parallel tasks
     * @returns count number of parallel tasks
     */
    getNumberOfParallelTasks(): number;
    /**
     * Add a  new task to queue
     * @param task task function
     * @param [options] options all options keys are case-insensitive
     * @returns task created task
     * @example
     * // add a task
     * scheduler.addTask((resolve, reject, cancel) => {
     *   resolve();
     * });
     * @example
     * // add a task and use it as a promise
     * scheduler.addTask((resolve, reject, cancel) => {
     *   resolve();
     * }).toPromise().then((data) => {
     * ...
     * }).catch((error) => {
     * ...
     * });
     * @example
     * // handle cancellation in the task
     * scheduler.addTask((resolve, reject, cancel) => {
     *   // Handle cancellation
     *   const AbortedErrorCode = 'Aborted';
     *   cancel.setErrorHandler(() => {
     *       reject(new Error(AbortedErrorCode));
     *   });
     * });
     */
    addTask(task: TaskScheduler.Task, options?: TaskScheduler.TaskOptions): ITask;
    /**
     * Return true if there are no tasks in the queue
     */
    isEmpty(): boolean;
    /**
     * Abort tasks by id
     * @param id id or array of id
     * @returns this
     */
    abortTask(id: number | number[]): this;
    /**
     * Cancel all tasks
     * @returns this
     */
    abort(): this;
}
export declare namespace TaskScheduler {
    /**
     * options
     */
    type Options = {
        /**
         * number of parallel tasks execution
         */
        numberofparalleltasks?: number;
    };
    type Task = (resolve: (value?: any) => void, reject: (e?: Error) => void, cancel: Cancel) => void;
    /**
     * options all options keys are case insensitive
     */
    type TaskOptions = {
        /**
         * a function to receive object to cancel
         */
        cancel?: ((cancel: Cancel) => void) | Cancel;
        id?: number;
    };
}

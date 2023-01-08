import { App, Modal } from 'obsidian';
import EditTask from './ui/EditTask.svelte';
import type { Task } from './Task';
import { StatusRegistry } from './StatusRegistry';
import { Status } from './Status';

export class TaskModal extends Modal {
    public readonly task: Task;
    public readonly onSubmit: (updatedTasks: Task[]) => void;

    constructor({ app, task, onSubmit }: { app: App; task: Task; onSubmit: (updatedTasks: Task[]) => void }) {
        super(app);

        this.task = task;
        this.onSubmit = (updatedTasks: Task[]) => {
            updatedTasks.length && onSubmit(updatedTasks);
            this.close();
        };
    }

    public onOpen(): void {
        this.titleEl.setText('Create or edit Task');
        const { contentEl } = this;

        const statusOptions = this.getKnownStatusesAndCurrentTaskStatusIfNotKnown();

        new EditTask({
            target: contentEl,
            props: { task: this.task, statusOptions: statusOptions, onSubmit: this.onSubmit },
        });
    }

    /**
     * If the task being edited has an unknown status, make sure it is added
     * to the dropdown list.
     * This allows the user to switch to a different status and then change their
     * mind and return to the initial status.
     */
    private getKnownStatusesAndCurrentTaskStatusIfNotKnown() {
        const statusOptions: Status[] = StatusRegistry.getInstance().registeredStatuses;
        if (StatusRegistry.getInstance().byIndicator(this.task.status.indicator) === Status.EMPTY) {
            statusOptions.push(this.task.status);
        }
        return statusOptions;
    }

    public onClose(): void {
        const { contentEl } = this;
        contentEl.empty();
    }
}

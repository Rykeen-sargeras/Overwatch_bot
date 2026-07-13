export class TaskQueue {
  private current: Promise<void> = Promise.resolve();

  add(task: () => Promise<void>): void {
    this.current = this.current
      .then(task)
      .catch((error: unknown) => console.error('Background task failed:', error));
  }
}

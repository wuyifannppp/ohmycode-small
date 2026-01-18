import type { PluginInput } from "@opencode-ai/plugin";
import type { BackgroundTask, LaunchInput, ResumeInput } from "./types";
import type { BackgroundTaskConfig } from "../../config/schema";
interface EventProperties {
    sessionID?: string;
    info?: {
        id?: string;
    };
    [key: string]: unknown;
}
interface Event {
    type: string;
    properties?: EventProperties;
}
export declare class BackgroundManager {
    private static cleanupManagers;
    private static cleanupRegistered;
    private static cleanupHandlers;
    private tasks;
    private notifications;
    private pendingByParent;
    private client;
    private directory;
    private pollingInterval?;
    private concurrencyManager;
    private shutdownTriggered;
    private config?;
    constructor(ctx: PluginInput, config?: BackgroundTaskConfig);
    launch(input: LaunchInput): Promise<BackgroundTask>;
    getTask(id: string): BackgroundTask | undefined;
    getTasksByParentSession(sessionID: string): BackgroundTask[];
    getAllDescendantTasks(sessionID: string): BackgroundTask[];
    findBySession(sessionID: string): BackgroundTask | undefined;
    /**
     * Track a task created elsewhere (e.g., from delegate_task) for notification tracking.
     * This allows tasks created by other tools to receive the same toast/prompt notifications.
     */
    trackTask(input: {
        taskId: string;
        sessionID: string;
        parentSessionID: string;
        description: string;
        agent?: string;
        parentAgent?: string;
        concurrencyKey?: string;
    }): Promise<BackgroundTask>;
    resume(input: ResumeInput): Promise<BackgroundTask>;
    private checkSessionTodos;
    handleEvent(event: Event): void;
    markForNotification(task: BackgroundTask): void;
    getPendingNotifications(sessionID: string): BackgroundTask[];
    clearNotifications(sessionID: string): void;
    /**
     * Validates that a session has actual assistant/tool output before marking complete.
     * Prevents premature completion when session.idle fires before agent responds.
     */
    private validateSessionHasOutput;
    private clearNotificationsForTask;
    /**
     * Remove task from pending tracking for its parent session.
     * Cleans up the parent entry if no pending tasks remain.
     */
    private cleanupPendingByParent;
    private startPolling;
    private stopPolling;
    private registerProcessCleanup;
    private unregisterProcessCleanup;
    /**
     * Get all running tasks (for compaction hook)
     */
    getRunningTasks(): BackgroundTask[];
    /**
     * Get all completed tasks still in memory (for compaction hook)
     */
    getCompletedTasks(): BackgroundTask[];
    /**
     * Safely complete a task with race condition protection.
     * Returns true if task was successfully completed, false if already completed by another path.
     */
    private tryCompleteTask;
    private notifyParentSession;
    private formatDuration;
    private hasRunningTasks;
    private pruneStaleTasksAndNotifications;
    private checkAndInterruptStaleTasks;
    private pollRunningTasks;
    /**
     * Shutdown the manager gracefully.
     * Cancels all pending concurrency waiters and clears timers.
     * Should be called when the plugin is unloaded.
     */
    shutdown(): void;
}
export {};

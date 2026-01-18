import { type PluginInput, type ToolDefinition } from "@opencode-ai/plugin";
import type { BackgroundManager } from "../../features/background-agent";
import type { CategoriesConfig, GitMasterConfig } from "../../config/schema";
type OpencodeClient = PluginInput["client"];
export interface DelegateTaskToolOptions {
    manager: BackgroundManager;
    client: OpencodeClient;
    directory: string;
    userCategories?: CategoriesConfig;
    gitMasterConfig?: GitMasterConfig;
}
export interface BuildSystemContentInput {
    skillContent?: string;
    categoryPromptAppend?: string;
}
export declare function buildSystemContent(input: BuildSystemContentInput): string | undefined;
export declare function createDelegateTask(options: DelegateTaskToolOptions): ToolDefinition;
export {};

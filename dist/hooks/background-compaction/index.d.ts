import type { BackgroundManager } from "../../features/background-agent";
interface CompactingInput {
    sessionID: string;
}
interface CompactingOutput {
    context: string[];
    prompt?: string;
}
/**
 * Background agent compaction hook - preserves task state during context compaction.
 *
 * When OpenCode compacts session context to save tokens, this hook injects
 * information about running and recently completed background tasks so the
 * agent doesn't lose awareness of delegated work.
 */
export declare function createBackgroundCompactionHook(manager: BackgroundManager): {
    "experimental.session.compacting": (input: CompactingInput, output: CompactingOutput) => Promise<void>;
};
export {};

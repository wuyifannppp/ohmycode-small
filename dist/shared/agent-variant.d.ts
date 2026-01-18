import type { OhMyOpenCodeConfig } from "../config";
export declare function resolveAgentVariant(config: OhMyOpenCodeConfig, agentName?: string): string | undefined;
export declare function applyAgentVariant(config: OhMyOpenCodeConfig, agentName: string | undefined, message: {
    variant?: string;
}): void;

/**
 * Minimum OpenCode version required for this plugin.
 * This plugin only supports OpenCode 1.1.1+ which uses the permission system.
 */
export declare const MINIMUM_OPENCODE_VERSION = "1.1.1";
export declare function parseVersion(version: string): number[];
export declare function compareVersions(a: string, b: string): -1 | 0 | 1;
export declare function isVersionGte(a: string, b: string): boolean;
export declare function isVersionLt(a: string, b: string): boolean;
export declare function getOpenCodeVersion(): string | null;
export declare function isOpenCodeVersionAtLeast(version: string): boolean;
export declare function resetVersionCache(): void;
export declare function setVersionCache(version: string | null): void;

import { z } from "zod";
export declare const BuiltinAgentNameSchema: z.ZodEnum<{
    Sisyphus: "Sisyphus";
    oracle: "oracle";
    librarian: "librarian";
    explore: "explore";
    "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
    "document-writer": "document-writer";
    "multimodal-looker": "multimodal-looker";
    "Metis (Plan Consultant)": "Metis (Plan Consultant)";
    "Momus (Plan Reviewer)": "Momus (Plan Reviewer)";
    "orchestrator-sisyphus": "orchestrator-sisyphus";
}>;
export declare const BuiltinSkillNameSchema: z.ZodEnum<{
    playwright: "playwright";
    "frontend-ui-ux": "frontend-ui-ux";
    "git-master": "git-master";
}>;
export declare const OverridableAgentNameSchema: z.ZodEnum<{
    Sisyphus: "Sisyphus";
    oracle: "oracle";
    librarian: "librarian";
    explore: "explore";
    "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
    "document-writer": "document-writer";
    "multimodal-looker": "multimodal-looker";
    "Metis (Plan Consultant)": "Metis (Plan Consultant)";
    "Momus (Plan Reviewer)": "Momus (Plan Reviewer)";
    "orchestrator-sisyphus": "orchestrator-sisyphus";
    build: "build";
    plan: "plan";
    "Sisyphus-Junior": "Sisyphus-Junior";
    "OpenCode-Builder": "OpenCode-Builder";
    "Prometheus (Planner)": "Prometheus (Planner)";
}>;
export declare const AgentNameSchema: z.ZodEnum<{
    Sisyphus: "Sisyphus";
    oracle: "oracle";
    librarian: "librarian";
    explore: "explore";
    "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
    "document-writer": "document-writer";
    "multimodal-looker": "multimodal-looker";
    "Metis (Plan Consultant)": "Metis (Plan Consultant)";
    "Momus (Plan Reviewer)": "Momus (Plan Reviewer)";
    "orchestrator-sisyphus": "orchestrator-sisyphus";
}>;
export declare const HookNameSchema: z.ZodEnum<{
    "context-window-monitor": "context-window-monitor";
    "session-recovery": "session-recovery";
    "session-notification": "session-notification";
    "comment-checker": "comment-checker";
    "grep-output-truncator": "grep-output-truncator";
    "tool-output-truncator": "tool-output-truncator";
    "empty-task-response-detector": "empty-task-response-detector";
    "think-mode": "think-mode";
    "anthropic-context-window-limit-recovery": "anthropic-context-window-limit-recovery";
    "background-notification": "background-notification";
    "non-interactive-env": "non-interactive-env";
    "interactive-bash-session": "interactive-bash-session";
    "thinking-block-validator": "thinking-block-validator";
    "compaction-context-injector": "compaction-context-injector";
    "claude-code-hooks": "claude-code-hooks";
    "auto-slash-command": "auto-slash-command";
}>;
export declare const BuiltinCommandNameSchema: z.ZodEnum<{
    "init-deep": "init-deep";
    "start-work": "start-work";
}>;
export declare const AgentOverrideConfigSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
    prompt: z.ZodOptional<z.ZodString>;
    prompt_append: z.ZodOptional<z.ZodString>;
    tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    disable: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        subagent: "subagent";
        primary: "primary";
        all: "all";
    }>>;
    color: z.ZodOptional<z.ZodString>;
    permission: z.ZodOptional<z.ZodObject<{
        edit: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>]>>;
        webfetch: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        doom_loop: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        external_directory: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const AgentOverridesSchema: z.ZodObject<{
    build: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    plan: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    Sisyphus: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "Sisyphus-Junior": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "OpenCode-Builder": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "Prometheus (Planner)": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "Metis (Plan Consultant)": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "Momus (Plan Reviewer)": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    oracle: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    librarian: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    explore: z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "frontend-ui-ux-engineer": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "document-writer": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "multimodal-looker": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    "orchestrator-sisyphus": z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        prompt_append: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ClaudeCodeConfigSchema: z.ZodObject<{
    mcp: z.ZodOptional<z.ZodBoolean>;
    commands: z.ZodOptional<z.ZodBoolean>;
    skills: z.ZodOptional<z.ZodBoolean>;
    agents: z.ZodOptional<z.ZodBoolean>;
    hooks: z.ZodOptional<z.ZodBoolean>;
    plugins: z.ZodOptional<z.ZodBoolean>;
    plugins_override: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
}, z.core.$strip>;
export declare const SisyphusAgentConfigSchema: z.ZodObject<{
    disabled: z.ZodOptional<z.ZodBoolean>;
    default_builder_enabled: z.ZodOptional<z.ZodBoolean>;
    planner_enabled: z.ZodOptional<z.ZodBoolean>;
    replace_plan: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CategoryConfigSchema: z.ZodObject<{
    model: z.ZodString;
    variant: z.ZodOptional<z.ZodString>;
    temperature: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
    maxTokens: z.ZodOptional<z.ZodNumber>;
    thinking: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            disabled: "disabled";
            enabled: "enabled";
        }>;
        budgetTokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    reasoningEffort: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    textVerbosity: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    prompt_append: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const BuiltinCategoryNameSchema: z.ZodEnum<{
    "visual-engineering": "visual-engineering";
    ultrabrain: "ultrabrain";
    artistry: "artistry";
    quick: "quick";
    "most-capable": "most-capable";
    writing: "writing";
    general: "general";
}>;
export declare const CategoriesConfigSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    model: z.ZodString;
    variant: z.ZodOptional<z.ZodString>;
    temperature: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
    maxTokens: z.ZodOptional<z.ZodNumber>;
    thinking: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            disabled: "disabled";
            enabled: "enabled";
        }>;
        budgetTokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    reasoningEffort: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    textVerbosity: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    prompt_append: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export declare const CommentCheckerConfigSchema: z.ZodObject<{
    custom_prompt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const DynamicContextPruningConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    notification: z.ZodDefault<z.ZodEnum<{
        off: "off";
        minimal: "minimal";
        detailed: "detailed";
    }>>;
    turn_protection: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        turns: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    protected_tools: z.ZodDefault<z.ZodArray<z.ZodString>>;
    strategies: z.ZodOptional<z.ZodObject<{
        deduplication: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        supersede_writes: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            aggressive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        purge_errors: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            turns: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ExperimentalConfigSchema: z.ZodObject<{
    aggressive_truncation: z.ZodOptional<z.ZodBoolean>;
    auto_resume: z.ZodOptional<z.ZodBoolean>;
    truncate_all_tool_outputs: z.ZodOptional<z.ZodBoolean>;
    dynamic_context_pruning: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        notification: z.ZodDefault<z.ZodEnum<{
            off: "off";
            minimal: "minimal";
            detailed: "detailed";
        }>>;
        turn_protection: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            turns: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>;
        protected_tools: z.ZodDefault<z.ZodArray<z.ZodString>>;
        strategies: z.ZodOptional<z.ZodObject<{
            deduplication: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>;
            supersede_writes: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                aggressive: z.ZodDefault<z.ZodBoolean>;
            }, z.core.$strip>>;
            purge_errors: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                turns: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SkillSourceSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    path: z.ZodString;
    recursive: z.ZodOptional<z.ZodBoolean>;
    glob: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export declare const SkillDefinitionSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    agent: z.ZodOptional<z.ZodString>;
    subtask: z.ZodOptional<z.ZodBoolean>;
    "argument-hint": z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    compatibility: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    "allowed-tools": z.ZodOptional<z.ZodArray<z.ZodString>>;
    disable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const SkillEntrySchema: z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    agent: z.ZodOptional<z.ZodString>;
    subtask: z.ZodOptional<z.ZodBoolean>;
    "argument-hint": z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    compatibility: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    "allowed-tools": z.ZodOptional<z.ZodArray<z.ZodString>>;
    disable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>]>;
export declare const SkillsConfigSchema: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodIntersection<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    agent: z.ZodOptional<z.ZodString>;
    subtask: z.ZodOptional<z.ZodBoolean>;
    "argument-hint": z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    compatibility: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    "allowed-tools": z.ZodOptional<z.ZodArray<z.ZodString>>;
    disable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>]>>, z.ZodObject<{
    sources: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        path: z.ZodString;
        recursive: z.ZodOptional<z.ZodBoolean>;
        glob: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>>>;
    enable: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    disable: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>>]>;
export declare const RalphLoopConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    default_max_iterations: z.ZodDefault<z.ZodNumber>;
    state_dir: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const BackgroundTaskConfigSchema: z.ZodObject<{
    defaultConcurrency: z.ZodOptional<z.ZodNumber>;
    providerConcurrency: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    modelConcurrency: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    staleTimeoutMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const NotificationConfigSchema: z.ZodObject<{
    force_enable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const GitMasterConfigSchema: z.ZodObject<{
    commit_footer: z.ZodDefault<z.ZodBoolean>;
    include_co_authored_by: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const OhMyOpenCodeConfigSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    disabled_mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    disabled_agents: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        Sisyphus: "Sisyphus";
        oracle: "oracle";
        librarian: "librarian";
        explore: "explore";
        "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
        "document-writer": "document-writer";
        "multimodal-looker": "multimodal-looker";
        "Metis (Plan Consultant)": "Metis (Plan Consultant)";
        "Momus (Plan Reviewer)": "Momus (Plan Reviewer)";
        "orchestrator-sisyphus": "orchestrator-sisyphus";
    }>>>;
    disabled_skills: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        playwright: "playwright";
        "frontend-ui-ux": "frontend-ui-ux";
        "git-master": "git-master";
    }>>>;
    disabled_hooks: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        "context-window-monitor": "context-window-monitor";
        "session-recovery": "session-recovery";
        "session-notification": "session-notification";
        "comment-checker": "comment-checker";
        "grep-output-truncator": "grep-output-truncator";
        "tool-output-truncator": "tool-output-truncator";
        "empty-task-response-detector": "empty-task-response-detector";
        "think-mode": "think-mode";
        "anthropic-context-window-limit-recovery": "anthropic-context-window-limit-recovery";
        "background-notification": "background-notification";
        "non-interactive-env": "non-interactive-env";
        "interactive-bash-session": "interactive-bash-session";
        "thinking-block-validator": "thinking-block-validator";
        "compaction-context-injector": "compaction-context-injector";
        "claude-code-hooks": "claude-code-hooks";
        "auto-slash-command": "auto-slash-command";
    }>>>;
    disabled_commands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        "init-deep": "init-deep";
        "start-work": "start-work";
    }>>>;
    agents: z.ZodOptional<z.ZodObject<{
        build: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        plan: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        Sisyphus: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "Sisyphus-Junior": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "OpenCode-Builder": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "Prometheus (Planner)": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "Metis (Plan Consultant)": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "Momus (Plan Reviewer)": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        oracle: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        librarian: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        explore: z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "frontend-ui-ux-engineer": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "document-writer": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "multimodal-looker": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        "orchestrator-sisyphus": z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            prompt_append: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    categories: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        model: z.ZodString;
        variant: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        maxTokens: z.ZodOptional<z.ZodNumber>;
        thinking: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<{
                disabled: "disabled";
                enabled: "enabled";
            }>;
            budgetTokens: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        reasoningEffort: z.ZodOptional<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        textVerbosity: z.ZodOptional<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        prompt_append: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    claude_code: z.ZodOptional<z.ZodObject<{
        mcp: z.ZodOptional<z.ZodBoolean>;
        commands: z.ZodOptional<z.ZodBoolean>;
        skills: z.ZodOptional<z.ZodBoolean>;
        agents: z.ZodOptional<z.ZodBoolean>;
        hooks: z.ZodOptional<z.ZodBoolean>;
        plugins: z.ZodOptional<z.ZodBoolean>;
        plugins_override: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    }, z.core.$strip>>;
    sisyphus_agent: z.ZodOptional<z.ZodObject<{
        disabled: z.ZodOptional<z.ZodBoolean>;
        default_builder_enabled: z.ZodOptional<z.ZodBoolean>;
        planner_enabled: z.ZodOptional<z.ZodBoolean>;
        replace_plan: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    comment_checker: z.ZodOptional<z.ZodObject<{
        custom_prompt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    experimental: z.ZodOptional<z.ZodObject<{
        aggressive_truncation: z.ZodOptional<z.ZodBoolean>;
        auto_resume: z.ZodOptional<z.ZodBoolean>;
        truncate_all_tool_outputs: z.ZodOptional<z.ZodBoolean>;
        dynamic_context_pruning: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            notification: z.ZodDefault<z.ZodEnum<{
                off: "off";
                minimal: "minimal";
                detailed: "detailed";
            }>>;
            turn_protection: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                turns: z.ZodDefault<z.ZodNumber>;
            }, z.core.$strip>>;
            protected_tools: z.ZodDefault<z.ZodArray<z.ZodString>>;
            strategies: z.ZodOptional<z.ZodObject<{
                deduplication: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodDefault<z.ZodBoolean>;
                }, z.core.$strip>>;
                supersede_writes: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodDefault<z.ZodBoolean>;
                    aggressive: z.ZodDefault<z.ZodBoolean>;
                }, z.core.$strip>>;
                purge_errors: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodDefault<z.ZodBoolean>;
                    turns: z.ZodDefault<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    auto_update: z.ZodOptional<z.ZodBoolean>;
    skills: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodIntersection<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        template: z.ZodOptional<z.ZodString>;
        from: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        agent: z.ZodOptional<z.ZodString>;
        subtask: z.ZodOptional<z.ZodBoolean>;
        "argument-hint": z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodString>;
        compatibility: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        "allowed-tools": z.ZodOptional<z.ZodArray<z.ZodString>>;
        disable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>]>>, z.ZodObject<{
        sources: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            path: z.ZodString;
            recursive: z.ZodOptional<z.ZodBoolean>;
            glob: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>>>;
        enable: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        disable: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>]>>;
    ralph_loop: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        default_max_iterations: z.ZodDefault<z.ZodNumber>;
        state_dir: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    background_task: z.ZodOptional<z.ZodObject<{
        defaultConcurrency: z.ZodOptional<z.ZodNumber>;
        providerConcurrency: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        modelConcurrency: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        staleTimeoutMs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    notification: z.ZodOptional<z.ZodObject<{
        force_enable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    git_master: z.ZodOptional<z.ZodObject<{
        commit_footer: z.ZodDefault<z.ZodBoolean>;
        include_co_authored_by: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type OhMyOpenCodeConfig = z.infer<typeof OhMyOpenCodeConfigSchema>;
export type AgentOverrideConfig = z.infer<typeof AgentOverrideConfigSchema>;
export type AgentOverrides = z.infer<typeof AgentOverridesSchema>;
export type BackgroundTaskConfig = z.infer<typeof BackgroundTaskConfigSchema>;
export type AgentName = z.infer<typeof AgentNameSchema>;
export type HookName = z.infer<typeof HookNameSchema>;
export type BuiltinCommandName = z.infer<typeof BuiltinCommandNameSchema>;
export type BuiltinSkillName = z.infer<typeof BuiltinSkillNameSchema>;
export type SisyphusAgentConfig = z.infer<typeof SisyphusAgentConfigSchema>;
export type CommentCheckerConfig = z.infer<typeof CommentCheckerConfigSchema>;
export type ExperimentalConfig = z.infer<typeof ExperimentalConfigSchema>;
export type DynamicContextPruningConfig = z.infer<typeof DynamicContextPruningConfigSchema>;
export type SkillsConfig = z.infer<typeof SkillsConfigSchema>;
export type SkillDefinition = z.infer<typeof SkillDefinitionSchema>;
export type RalphLoopConfig = z.infer<typeof RalphLoopConfigSchema>;
export type NotificationConfig = z.infer<typeof NotificationConfigSchema>;
export type CategoryConfig = z.infer<typeof CategoryConfigSchema>;
export type CategoriesConfig = z.infer<typeof CategoriesConfigSchema>;
export type BuiltinCategoryName = z.infer<typeof BuiltinCategoryNameSchema>;
export type GitMasterConfig = z.infer<typeof GitMasterConfigSchema>;
export { AnyMcpNameSchema, type AnyMcpName, McpNameSchema, type McpName } from "../mcp/types";

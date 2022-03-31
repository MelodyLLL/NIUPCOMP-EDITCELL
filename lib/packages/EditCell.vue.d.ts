declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    toolTipContent: {
        type: StringConstructor;
        default: string;
    };
    toolTipDelay: {
        type: NumberConstructor;
        default: number;
    };
    toolTipPlacement: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    editableComponent: {
        type: StringConstructor;
        default: string;
    };
    closeEvent: {
        type: StringConstructor;
        default: string;
    };
    showEditBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlVal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentStyle: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
}, {
    state: {
        editMode: boolean;
    };
    model: import("vue").WritableComputedRef<unknown>;
    newAttrs: import("vue").ComputedRef<{
        [x: string]: unknown;
    }>;
    inputRef: any;
    onInputChange: (val: string) => void;
    onFieldClick: () => void;
    onInputExit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "input"[], "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    toolTipContent: {
        type: StringConstructor;
        default: string;
    };
    toolTipDelay: {
        type: NumberConstructor;
        default: number;
    };
    toolTipPlacement: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    editableComponent: {
        type: StringConstructor;
        default: string;
    };
    closeEvent: {
        type: StringConstructor;
        default: string;
    };
    showEditBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlVal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentStyle: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
}>> & {
    onInput?: (...args: any[]) => any;
}, {
    modelValue: string | number;
    toolTipContent: string;
    toolTipDelay: number;
    toolTipPlacement: string | Record<string, any>;
    showInput: boolean;
    editableComponent: string;
    closeEvent: string;
    showEditBtn: boolean;
    controlVal: boolean;
    disabled: boolean;
    contentStyle: string | Record<string, any>;
}>;
export default _default;

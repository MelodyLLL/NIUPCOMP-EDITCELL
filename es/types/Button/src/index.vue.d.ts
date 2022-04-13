import { PropType } from 'vue';
declare type ButtonTypes = 'default' | 'text' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | undefined;
declare type ButtonSize = 'medium' | 'small' | 'mini' | undefined;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    icon: StringConstructor;
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classNames: {
        [x: string]: boolean;
        'fa-button--text': boolean;
        'fa-button--primary': boolean;
        'fa-button--success': boolean;
        'fa-button--warning': boolean;
        'fa-button--info': boolean;
        'fa-button--danger': boolean;
        'is-disabled': boolean;
        'is-plain': boolean;
        'is-circle': boolean;
        'is-round': boolean;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot;
    }>;
    handleClick: (e: any) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    icon: StringConstructor;
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    type: ButtonTypes;
    size: ButtonSize;
    disabled: boolean;
    round: boolean;
    plain: boolean;
    circle: boolean;
}>;
export default _default;

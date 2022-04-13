import type { ExtractPropTypes } from 'vue';
import EditCell from './src/index.vue';
export declare const EditCellProps: Readonly<ExtractPropTypes<{
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
}>>;
export declare type EditCellProps = ExtractPropTypes<typeof EditCellProps>;
export declare type EditCellInstance = InstanceType<typeof EditCell>;
export default EditCell;

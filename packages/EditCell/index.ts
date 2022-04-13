// import { buildProps, iconPropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue';
import type EditCellType from './EditCell.vue';
import EditCell from './src/index.vue';

export const EditCellProps = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  toolTipContent: {
    type: String,
    default: '可编辑的单元格',
  },
  toolTipDelay: {
    type: Number,
    default: 500,
  },
  toolTipPlacement: {
    type: [Object, String],
    default: 'top-start',
  },
  showInput: {
    type: Boolean,
    default: false,
  },
  editableComponent: {
    type: String,
    default: 'el-input',
  },
  closeEvent: {
    type: String,
    default: 'onBlur',
  },
  showEditBtn: {
    type: Boolean,
    default: false,
  },
  // 修改为外部受控
  controlVal: {
    type: Boolean,
    default: false,
  },
  // 禁用点击
  disabled: {
    type: Boolean,
    default: false,
  },
  contentStyle: {
    type: [String, Object],
    default: '',
  },
});
export type EditCellProps = ExtractPropTypes<typeof EditCellProps>;
export type EditCellInstance = InstanceType<typeof EditCell>;

export default EditCell;

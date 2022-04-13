<template>
  <div class="editCell">
    <div
      :style="!showEditBtn ? { flexGrow: 1 } : undefined"
      @click="onFieldClick"
    >
      <el-tooltip
        v-if="!state.editMode && !showInput"
        :show-after="toolTipDelay"
        :content="toolTipContent"
      >
        <div tabindex="0" :style="contentStyle" @keyup.enter="onFieldClick">
          <slot name="content"></slot>
        </div>
      </el-tooltip>
      <component
        :is="editableComponent"
        v-if="state.editMode || showInput"
        ref="inputRef"
        v-bind="newAttrs"
        v-model="model"
        @focus="onFieldClick"
        @keyup.enter="onInputExit"
      >
        <slot name="edit-component-slot"></slot>
      </component>
    </div>
    <el-button
      v-show="!state.editMode && !showInput && showEditBtn && !disabled"
      class="editBtn"
      icon="Edit"
      type="text"
      @click="onFieldClick"
    ></el-button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref } from 'vue';

export default defineComponent({
  name: 'EditableCell',
  inheritAttrs: false,
  props: {
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
  },
  emits: ['input'],
  setup (props, ctx) {
    const state = reactive({
      editMode: false,
    });
    console.log(11);

    const inputRef = ref<any>(null);
    const onFieldClick = () => {
      if (props.disabled) {
        return;
      }
      state.editMode = true;

      nextTick(() => {
        // const elRef = unref(inputRef);
        if (inputRef.value) {
          inputRef.value.focus();
        }
      });
    };

    const onInputExit = () => {
      state.editMode = false;
    };

    const onInputChange = (val: string) => {
      ctx.emit('input', val);
    };

    const model = computed({
      get () {
        return props.modelValue;
      },
      set (val) {
        if (!props.controlVal) {
          ctx.emit('input', val);
        }
      },
    });

    const newAttrs = computed(() => {
      return {
        [props.closeEvent]: onInputExit,
        ...ctx.attrs,
      };
    });

    return {
      state,
      model,
      newAttrs,
      inputRef,
      onInputChange,
      onFieldClick,
      onInputExit,
    };
  },
});
</script>
<style lang="less" scoped>
.editCell {
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  .editBtn {
    margin-left: 8px;
  }
}
</style>

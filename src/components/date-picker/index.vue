<template>
  <el-input
    class="my-date-picker"
    size="small"
    v-model="inputVal"
    clearable
    @click="handleClick($event)"
    @blur="handleBlur"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  modelValue: String,
  dateFmt: {
    type: String,
    default: 'yyyy-MM-dd'
  },
  startDate: {
    type: String,
    default: ''
  },
  minDate: {
    type: String,
    default: '0001-01-01 00:00:00'
  },
  maxDate: {
    type: String,
    default: '9999-12-31 23:59:59'
  },
  minTime: {
    type: String,
    default: '00:00:00'
  },
  maxTime: {
    type: String,
    default: '23:59:59'
  },
  disabledDays: {
    type: Array,
    default() {
      return null;
    }
  },
  disabledDates: {
    type: Array,
    default() {
      return null;
    }
  },
  specialDays: {
    type: Array,
    default() {
      return null;
    }
  },
  specialDates: {
    type: Array,
    default() {
      return null;
    }
  },
  opposite: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update:modelValue']);
const inputVal = ref('');

watch(
  () => props.modelValue,
  newVal => {
    inputVal.value = newVal;
  }
);

watch(inputVal, newVal => {
  emit('update:modelValue', newVal);
});

// 点击 el-input 调出日历
const handleClick = e => {
  WdatePicker({
    el: e.target,
    dateFmt: props.dateFmt, // 格式规则
    startDate: props.startDate, // 起始日期
    minDate: props.minDate, // 最小日期
    maxDate: props.maxDate, // 最大日期
    minTime: props.minTime, // 每日可选择的最小时间
    maxTime: props.maxTime, // 每日可选择的最大时间
    disabledDays: props.disabledDays, // 无效天，禁用周日至周六所对应的日期，0至6 分别代表 周日至周六
    disabledDates: props.disabledDates, // 无效日期，禁用所指定的一个或多个日期
    specialDays: props.specialDays, // 特殊天，周日至周六所对应的日期进行高亮显示，0至6 分别代表 周日至周六
    specialDates: props.specialDates, // 特殊日期，对指定的日期进行高亮显示
    opposite: props.opposite, // 默认为false，为true时，无效日期变成有效日期，该属性对无效天特殊天不起作用
    onpicked: dp => {
      inputVal.value = dp.cal.getNewDateStr();
    },
    oncleared: () => {
      inputVal.value = '';
    }
  });
};

// el-input失去焦点，此时手动赋值，否则会有bug
const handleBlur = e => {
  emit('update:modelValue', e.target.value);
};
</script>

<style lang="scss" scoped>
.my-date-picker {
  width: 150px;
  cursor: pointer;
  ::v-deep {
    .el-input__inner {
      cursor: pointer;
    }
  }
}
</style>

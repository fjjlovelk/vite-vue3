<template>
  <div>
    <vxe-table
      ref="xTable"
      height="auto"
      align="center"
      :data="demo1.tableData"
      :row-config="{ isHover: true, isCurrent: true }"
    >
      <vxe-column
        v-for="config in demo1.tableColumn"
        :key="config.key"
        :type="config.type"
        :field="config.field"
        :title="config.title"
        :fixed="config.fixed"
        :width="config.width"
        :filters="config.filters"
      >
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const demo1 = reactive({
  tableColumn: [
    { key: 1, type: 'seq', title: ' ', width: 60, fixed: null },
    { key: 2, type: 'checkbox', width: 50, fixed: null },
    { key: 3, field: 'name', title: 'Name', width: 200 },
    { key: 4, field: 'nickname', title: 'Nickname', width: 300 },
    {
      key: 5,
      field: 'sex',
      title: 'Sex',
      width: 200,
      filters: [{ value: '1', label: '男' }]
    },
    { key: 6, field: 'role', title: 'Role', width: 200 },
    { key: 7, field: 'address', title: 'Address' }
  ],
  tableData: [
    {
      id: 10001,
      name: 'Test1',
      nickname: 'T1',
      role: 'Develop',
      sex: '1',
      age: 28,
      address: 'test abc'
    },
    {
      id: 10002,
      name: 'Test2',
      nickname: 'T2',
      role: 'Test',
      sex: '0',
      age: 22,
      address: 'Guangzhou'
    },
    {
      id: 10003,
      name: 'Test3',
      nickname: 'T3',
      role: 'PM',
      sex: '1',
      age: 32,
      address: 'Shanghai'
    },
    {
      id: 10004,
      name: 'Test4',
      nickname: 'T4',
      role: 'Designer',
      sex: '0 ',
      age: 23,
      address: 'test abc'
    },
    {
      id: 10005,
      name: 'Test5',
      nickname: 'T5',
      role: 'Develop',
      sex: '0 ',
      age: 30,
      address: 'Shanghai'
    },
    {
      id: 10006,
      name: 'Test6',
      nickname: 'T6',
      role: 'Designer',
      sex: '0 ',
      age: 21,
      address: 'test abc'
    },
    {
      id: 10007,
      name: 'Test7',
      nickname: 'T7',
      role: 'Test',
      sex: '1',
      age: 29,
      address: 'test abc'
    },
    {
      id: 10008,
      name: 'Test8',
      nickname: 'T8',
      role: 'Develop',
      sex: '1',
      age: 35,
      address: 'test abc'
    }
  ]
});
</script>

<style lang="scss" scoped></style>

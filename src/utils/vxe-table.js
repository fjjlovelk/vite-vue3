import 'xe-utils';
import {
  // 全局对象
  VXETable,
  // 表格功能
  Footer,
  // 可选组件
  Column,
  // 表格
  Table
} from 'vxe-table';

VXETable.setup({
  size: 'mini',
  table: {
    border: true
  }
});

function useTable(app) {
  // 表格功能
  app.use(Footer).use(Column).use(Table);
}

export default useTable;

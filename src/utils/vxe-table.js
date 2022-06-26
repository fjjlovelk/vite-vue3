import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

VXETable.setup({
  size: 'mini',
  table: {
    border: true
  }
});
function useTable(app) {
  app.use(VXETable);
}

export default useTable;

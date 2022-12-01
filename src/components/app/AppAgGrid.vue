<template>
  <slot name="header-btn"> </slot>
  <div style="max-height: 500px; margin-top: 20px">
    <ag-grid-vue
      style="width: auto; height: 100%"
      class="ag-theme-alpine-dark"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :copyHeadersToClipboard="true"
      :rowHeight="60"
      :enableCellTextSelection="true"
      rowSelection="multiple"
      @rowDoubleClicked="doubleClickEvent"
    >
    </ag-grid-vue>
    <p class="all">
      총 <span class="redTxt">{{ totalElements || 0 }}</span
      >개
    </p>
    <select class="select_02" :value="pageSize" @change="changePageSize($event.target)">
      <option value="5">5개 출력</option>
      <option value="10">10개 출력</option>
      <option value="20">20개 출력</option>
      <option value="50">50개 출력</option>
      <option value="100">100개 출력</option>
    </select>
    <ul class="paging">
      <v-pagination
        :model-value="currentNumber + 1"
        :pages="totalPages"
        :range-size="1"
        @update:modelValue="updatePageHandler"
      />
    </ul>
  </div>
</template>
<script setup>
import VPagination from '@hennge/vue3-pagination';
import { AgGridVue } from 'ag-grid-vue3';
import { reactive } from 'vue';

const props = defineProps({
  columnDefs: Array,
  rowData: Array,
  currentNumber: Number,
  pageSize: Number,
  totalPages: Number,
  totalElements: Number,
});
const defaultColDef = reactive(
  {
    // editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  },
  props.rowData,
);

const emits = defineEmits([
  'update:pageSize',
  'update:currentNumber',
  'getData',
  'rowDoubleClicked',
]);
const updatePageHandler = number => {
  emits('update:currentNumber', number - 1);
  emits('getData');
};
const doubleClickEvent = row => {
  emits('rowDoubleClicked', row);
};
const changePageSize = target => {
  console.log(target.value);
  emits('update:pageSize', Number(target.value));
  emits('update:currentNumber', 0);
  emits('getData');
};
</script>
<script>
export default {};
</script>

<style scope>
.Control {
  fill: #333333 !important;
}
.Control-active {
  fill: #bbbbbb !important;
}
.ag-font-style {
  user-select: initial;
  -moz-user-select: text;
  -ms-user-select: text;
  -webkit-user-select: text;
}
.ag-root-wrapper-body.ag-layout-normal {
  height: auto;
}
.ag-root-wrapper {
  background: #27293d !important;
  font-family: 'GothicA1-ExtraBold';
}
.ag-root-wrapper {
  border: none !important;
}
.ag-header-viewport {
  background: #313346 !important;
}
.ag-row {
  background: #27293d !important;
  color: #adb2cf;
}
.ag-center-cols-clipper {
  min-height: 260px !important;
}
.ag-root.ag-layout-normal {
  max-height: 350px;
}
.ag-header-cell-label {
  color: #d6d9e9;
  font-size: 16px;
  justify-content: center;
}
.ag-header-cell-label .ag-header-cell-text {
  padding-top: 5px;
}
.ag-cell-value {
  font-size: 16px;
}
.ag-cell {
  padding-top: 10px;
  text-align: center;
  padding-right: 33px;
}
.aw-grid-row {
  overflow: visible !important;
}
.ag-popup-editor {
  background: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: none !important;
}
</style>

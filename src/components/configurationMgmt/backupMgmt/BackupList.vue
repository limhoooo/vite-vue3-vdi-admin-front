<template>
  <AppAgGrid
    v-if="page"
    v-model:current-number="filterData.page"
    v-model:page-size="filterData.size"
    :column-defs="columnDefs"
    :row-data="page"
    :total-pages="5"
    :total-elements="page.length"
    :suppressRowClickSelection="true"
    :rowSelection="'multiple'"
    @getData="getList"
  >
  </AppAgGrid>
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { backupStore } from '@/stores/configurationMgmt/backupStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {},
  setup() {
    const store = backupStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isModifyModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const updateUseFnc = data => {
      // store.UPDATE_WORKCODE_USE(data);
    };
    const modifyFnc = item => {
      modalFnc('isModifyModal');
    };
    // 추후 개발시 체크박스 ag그리드 에 맞게 다시 개발
    const columnDefs = reactive([
      {
        minWidth: 180,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      },
      { field: '백업파일명', headerName: '백업파일명' },
      { field: 'VM명', headerName: 'VM명' },
      { field: '백업저장위치', headerName: '백업저장위치' },
      { field: '백업등록날짜', headerName: '백업등록날짜' },
      { field: '백업허용기간', headerName: '백업허용기간' },
      { field: '백업주기', headerName: '백업주기' },
      { field: '백업종료날짜', headerName: '백업종료날짜' },
    ]);
    onCreated();
    return {
      getList,
      modalFnc,
      updateUseFnc,
      modifyFnc,
      isModal,
      page,
      workCodeDetail,
      filterData,
      columnDefs,
    };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
</style>

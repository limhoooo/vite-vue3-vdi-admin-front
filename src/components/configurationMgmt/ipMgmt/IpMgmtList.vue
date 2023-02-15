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
    @rowDoubleClicked="modalFnc('isDetailModal')"
  >
  </AppAgGrid>
  <ModalIpMgmtModify v-if="isModal.isModifyModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { ipMgmtStore } from '@/stores/configurationMgmt/ipMgmtStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalIpMgmtModify: defineAsyncComponent(() => import('./modal/ModalIpMgmtModify.vue')),
  },
  setup() {
    const store = ipMgmtStore();
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
      { field: 'ip주소', headerName: 'ip주소' },
      { field: '게이트웨이주소', headerName: '게이트웨이주소' },
      { field: 'VDI명', headerName: 'VDI명' },
      { field: '할당일시', headerName: '할당일시' },
      {
        field: '할당상태',
        headerName: '할당상태',
        cellStyle: params => {
          if (params.value === '할당') return { color: '#3173ed' };
          if (params.value === '미할당') return { color: '#c97377' };
          return null;
        },
      },
      {
        headerName: '수정',
        cellRenderer: AppGridBtn,
        cellRendererParams: params => {
          return {
            btnText: '수정',
            onClick: modifyFnc,
          };
        },
      },
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

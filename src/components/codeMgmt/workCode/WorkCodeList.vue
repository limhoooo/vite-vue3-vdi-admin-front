<template>
  <AppAgGrid
    v-if="page"
    v-model:current-number="filterData.page"
    v-model:page-size="filterData.size"
    :column-defs="columnDefs"
    :row-data="page"
    :total-pages="5"
    :total-elements="page.length"
    @getData="getList"
    @rowDoubleClicked="moveDetail"
  >
  </AppAgGrid>
  <ModalWorkCodeModify v-if="isModal" @close="isModalFnc" :codeData="workCodeDetail" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { workCodeStore } from '@/stores/codeMgmt/workCodeStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalWorkCodeModify: defineAsyncComponent(() => import('./modal/ModalWorkCodeModify.vue')),
  },
  setup() {
    const store = workCodeStore();
    const isModal = ref(false);
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const updateUseFnc = data => {
      store.UPDATE_WORKCODE_USE(data);
    };
    const modifyFnc = item => {
      workCodeDetail.value = item;
      isModalFnc();
    };

    const columnDefs = reactive([
      { field: 'id', headerName: '키', hide: true },
      {
        field: 'rowNum',
        headerName: 'NO',
        valueGetter: 'node.rowIndex + 1',
        cellRenderer: AppGridRowNum,
        cellRendererParams: {
          page: {
            totalElements: 20,
            size: filterData.value.size,
            number: filterData.value.page,
          },
        },
      },
      { field: '업무코드', headerName: '대분류코드' },
      { field: '코드명', headerName: '코드명' },
      { field: '이름', headerName: '이름' },
      {
        field: '사용여부',
        headerName: '사용여부',
        cellRenderer: AppGridCheckBox,
        cellRendererParams: {
          onChanged: updateUseFnc,
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
      isModalFnc,
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

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
    @rowDoubleClicked="cellClickEvent"
  >
  </AppAgGrid>
  <ModalQnaDetail v-if="isModal.isDetailModal" @close="modalFnc" :clickCellData="clickCellData" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { qnaStore } from '@/stores/boardMgmt/qnaStore.js';
import { useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

import AppGridRowNum from '@/components/app/AppGridRowNum.vue';

export default defineComponent({
  components: {
    ModalQnaDetail: defineAsyncComponent(() => import('./modal/ModalQnaDetail.vue')),
  },
  setup() {
    const store = qnaStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);
    const isModal = ref({
      isDetailModal: false,
    });
    const clickCellData = ref();
    const cellClickEvent = row => {
      console.log(row.data);
      clickCellData.value = row.data;
      modalFnc('isDetailModal');
    };
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
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
      { field: '제목', headerName: '제목' },
      { field: '작성자', headerName: '작성자' },
      {
        field: '진행상태',
        headerName: '진행상태',
        cellStyle: params => {
          if (params.value === '답변완료') return { color: '#2bc87c' };
          return null;
        },
      },
      { field: '신청일시', headerName: '신청일시' },
    ]);
    onCreated();
    return {
      isModal,
      page,
      modalFnc,
      getList,
      filterData,
      columnDefs,
      cellClickEvent,
    };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
</style>

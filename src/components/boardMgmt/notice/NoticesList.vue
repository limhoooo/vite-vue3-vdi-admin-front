<template>
  <div style="display: flex; justify-content: flex-end">
    <button class="blueBtn writBtn notice_write" @click="modalFnc('isCreateModal')">글쓰기</button>
  </div>
  <AppAgGrid
    v-if="page"
    v-model:current-number="filterData.page"
    v-model:page-size="filterData.size"
    :column-defs="columnDefs"
    :row-data="page"
    :total-pages="5"
    :total-elements="page.length"
    @getData="getList"
    @rowDoubleClicked="modalFnc('isDetailModal')"
  >
  </AppAgGrid>
  <ModalNoticeCreate v-if="isModal.isCreateModal" @close="modalFnc" />
  <ModalNoticeDetail v-if="isModal.isDetailModal" @close="modalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';
import { useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';

export default defineComponent({
  components: {
    ModalNoticeCreate: defineAsyncComponent(() => import('./modal/ModalNoticeCreate.vue')),
    ModalNoticeDetail: defineAsyncComponent(() => import('./modal/ModalNoticeDetail.vue')),
  },
  setup() {
    const store = noticeStore();
    const router = useRouter();
    const { filterData, page, getList, onCreated, list } = useGrid(store);
    const isModal = ref({
      isCreateModal: false,
      isDetailModal: false,
    });
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
      { field: '담당자', headerName: '담당자' },
      { field: '작성일자', headerName: '작성일자' },
    ]);
    onCreated();
    return {
      getList,
      modalFnc,
      page,
      columnDefs,
      filterData,
      isModal,
    };
  },
});
</script>
<style scoped></style>

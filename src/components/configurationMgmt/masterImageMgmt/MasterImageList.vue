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
    @rowDoubleClicked="modalFnc('isDetailModal')"
  >
  </AppAgGrid>
  <ModalMasterImageDetail v-if="isModal.isDetailModal" @close="modalFnc" />
  <ModalMasterImageDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { masterImageStore } from '@/stores/configurationMgmt/masterImageStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalMasterImageDelete: defineAsyncComponent(() =>
      import('./modal/ModalMasterImageDelete.vue'),
    ),
    ModalMasterImageDetail: defineAsyncComponent(() =>
      import('./modal/ModalMasterImageDetail.vue'),
    ),
  },
  setup() {
    const store = masterImageStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isDeleteModal: false,
      isDetailModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const updateUseFnc = data => {
      // store.UPDATE_WORKCODE_USE(data);
    };
    const modifyFnc = item => {
      modalFnc('isDeleteModal');
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
      { field: 'Cloud플랫폼구분', headerName: 'Cloud플랫폼구분' },
      { field: '마스터이미지구분', headerName: '마스터이미지구분' },
      { field: '마스터이미지명', headerName: '마스터이미지명' },
      { field: '마스터이미지설명', headerName: '마스터이미지설명' },
      {
        headerName: '수정',
        cellRenderer: AppGridBtn,
        cellRendererParams: params => {
          return {
            btnText: '삭제',
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

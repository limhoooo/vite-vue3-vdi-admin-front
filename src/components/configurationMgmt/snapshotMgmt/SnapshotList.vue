<template>
  <!-- 
  current-number : 선택된 페이지 숫자
  page-size : 선택된 n개씩보기 필터 
  column-defs : 필드 데이터
  row-data : list 데이터
  total-pages : 총 보여줄 current 페이지 숫자
  total-elements : list의 총 개수
  @getData : 필터시 불러올 data Fnc
 -->
  <AppAgGrid
    v-if="page"
    v-model:current-number="filterData.page"
    v-model:page-size="filterData.size"
    :column-defs="columnDefs"
    :row-data="page"
    :total-pages="5"
    :total-elements="page.length"
    @getData="getList"
  >
  </AppAgGrid>
  <!-- <ModalCreateVdi v-if="isModal.isCreateVdiModal" @close="modalFnc" />
  <ModalDetailVdi
    v-if="isModal.isDetailVdiModal"
    @close="modalFnc"
    :clickCellData="clickCellData"
  /> -->
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { snapshotStore } from '@/stores/configurationMgmt/snapshotStore';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import { useGrid } from '@/composables/grid';
import ModalSnpshotMgmt from './modal/ModalSnpshotMgmt.vue';

export default defineComponent({
  components: {
    AppAgGrid,
    //ModalCreateVdi: defineAsyncComponent(() => import('./modal/ModalCreateVdi.vue')),
    //ModalDetailVdi: defineAsyncComponent(() => import('./modal/ModalDetailVdi.vue')),
  },
  setup() {
    const store = snapshotStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);
    const isModal = ref({
      isCreateVdiModal: false,
      isDetailVdiModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const columnDefs = reactive([
      { field: 'id', headerName: 'id' },
      { field: '클러스터명', headerName: '클러스터명' },
      { field: 'host명', headerName: 'host명' },
      { field: 'vdi명', headerName: 'vdi명' },
      { field: '스냅샷갯수', headerName: '스냅샷갯수' },
      {
        headerName: '관리',
        editable: true,
        cellRenderer: params => {
          return `<div class="set_tooltip _small" style="padding: 0;"><button class="lineBtn">관리</button></div>`;
        },
        cellEditorSelector: params => {
          return {
            component: ModalSnpshotMgmt,
            popup: true,
            popupPosition: 'left',
          };
        },
      },
    ]);
    onCreated();
    return {
      page,
      columnDefs,
      filterData,
      getList,
      modalFnc,
      isModal,
    };
  },
});
</script>

<style scoped></style>

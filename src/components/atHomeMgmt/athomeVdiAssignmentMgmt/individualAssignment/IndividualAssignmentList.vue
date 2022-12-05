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
  >
    <template #header-btn>
      <p class="xlsx">
        <a download="" class="xlsxBtn">엑셀저장</a>
      </p>
    </template>
  </AppAgGrid>
  <ModalCollect v-if="isModal.isCollectModal" @close="isCollectModalFnc" :homeListId="homeListId" />
  <ModalNoneCollect v-if="isModal.isNoneModal" @close="isNoneModalFnc" />
  <ModalAssignment
    v-if="isModal.isAssignmentModal"
    @close="isAssignmentModalFnc"
    :homeListId="homeListId"
  />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { IndividualAssignmentStore } from '@/stores/atHomeMgmt/IndividualAssignmentStore.js';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalCollect: defineAsyncComponent(() => import('./modal/ModalCollect.vue')),
    ModalNoneCollect: defineAsyncComponent(() => import('./modal/ModalNoneCollect.vue')),
    ModalAssignment: defineAsyncComponent(() => import('./modal/ModalAssignment.vue')),
  },
  setup() {
    const store = IndividualAssignmentStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const homeListId = ref();
    const isModal = ref({
      isNoneModal: false,
      isCollectModal: false,
      isAssignmentModal: false,
    });
    const isNoneModalFnc = data => {
      homeListId.value = data.id;
      isModal.value.isNoneModal = !isModal.value.isNoneModal;
    };
    const isCollectModalFnc = data => {
      homeListId.value = data.id;
      isModal.value.isCollectModal = !isModal.value.isCollectModal;
    };
    const isAssignmentModalFnc = data => {
      homeListId.value = data.id;
      isModal.value.isAssignmentModal = !isModal.value.isAssignmentModal;
    };
    const columnDefs = reactive([
      { field: 'id', headerName: '키', hide: true },
      { field: 'VDI명', headerName: '공용(재택)VDI명' },
      { field: '사번', headerName: '사번' },
      { field: '이름', headerName: '이름' },
      { field: '소속', headerName: '소속' },
      { field: '신청일시', headerName: '신청일시' },
      { field: '종료일시', headerName: '종료일시' },
      {
        field: '할당상태',
        headerName: '할당상태',
        cellStyle: params => {
          if (params.value === '할당완료') return { color: '#2bc87c' };
          if (params.value === '회수') return { color: '#c97377' };
          return null;
        },
      },
      { field: '최종접속일시', headerName: '최종접속일시' },
      { field: '최종종료일시', headerName: '최종종료일시' },
      {
        headerName: '회수',
        cellRenderer: AppGridBtn,
        cellRendererParams: params => {
          const btnDivision = params.data.회수
            ? {
                btnText: '회수1',
                onClick: isNoneModalFnc,
              }
            : {
                btnText: '회수2',
                onClick: isCollectModalFnc,
              };
          return btnDivision;
        },
      },
      {
        headerName: '할당',
        cellRenderer: AppGridBtn,
        cellRendererParams: params => {
          return {
            btnText: '할당',
            onClick: isAssignmentModalFnc,
          };
        },
      },
    ]);
    onCreated();
    return {
      page,
      homeListId,
      isModal,
      columnDefs,
      getList,
      filterData,
      isNoneModalFnc,
      isAssignmentModalFnc,
      isCollectModalFnc,
    };
  },
});
</script>

<style scoped></style>

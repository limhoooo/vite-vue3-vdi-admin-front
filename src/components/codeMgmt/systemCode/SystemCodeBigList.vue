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
  <ModalSystemBigCodeModify v-if="isModal" @close="isModalFnc" :codeData="systemCodeDetail" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { systemCodeStore } from '@/stores/codeMgmt/systemCodeStore.js';
import { useRouter } from 'vue-router';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalSystemBigCodeModify: defineAsyncComponent(() =>
      import('./modal/ModalSystemBigCodeModify.vue'),
    ),
  },
  setup() {
    const router = useRouter();
    const store = systemCodeStore();
    const isModal = ref(false);
    const { filterData, page, getList, onCreated, list } = useGrid(store);
    const systemCodeDetail = ref();
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const updateUseFnc = data => {
      store.UPDATE_SYSTEMCODE_USE(data);
    };
    const modifyFnc = item => {
      systemCodeDetail.value = item;
      isModalFnc();
    };
    const moveDetail = row => {
      router.push({ name: 'SystemCodesSmall', params: { id: row.data.id } });
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
      updateUseFnc,
      modifyFnc,
      moveDetail,
      isModalFnc,
      isModal,
      page,
      systemCodeDetail,
      columnDefs,
      filterData,
    };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
</style>

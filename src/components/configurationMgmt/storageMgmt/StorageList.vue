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
  <ModalStorageDetail v-if="isModal.isDetailModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { storageStore } from '@/stores/configurationMgmt/storageStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalStorageDetail: defineAsyncComponent(() => import('./modal/ModalStorageDetail.vue')),
  },
  setup() {
    const store = storageStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isDetailModal: false,
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
      { field: '스토리지명', headerName: '스토리지명' },
      { field: '사이즈', headerName: '사이즈' },
      { field: '설명', headerName: '설명' },
      { field: '등록날짜', headerName: '등록날짜' },
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

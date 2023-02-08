<template>
  <div class="table_top mgt60px">
    <input type="secrch" class="textInput300" />
    <button class="grayBtn graySearch">검색</button>
    <button class="UserDeleit" @click="modalFnc('isDeleteModal')">수신자 삭제</button>
  </div>
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
  <ModalAlarmDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { alarmStore } from '@/stores/configurationMgmt/alarmStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalAlarmDelete: defineAsyncComponent(() => import('./modal/ModalAlarmDelete.vue')),
  },
  setup() {
    const store = alarmStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isDeleteModal: false,
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
      { field: '수신자명', headerName: '수신자명' },
      { field: '부서', headerName: '부서' },
      { field: '전화번호', headerName: '전화번호' },
      { field: '이메일', headerName: '이메일' },
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

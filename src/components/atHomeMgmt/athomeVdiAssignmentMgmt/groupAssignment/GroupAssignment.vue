<template>
  <div class="btnzon">
    <div class="_BL">
      <input type="secrch" class="textInput300" v-model="filterData.검색내용" />
      <button class="grayBtn graySearch" @click="getList">검색</button>
    </div>
    <div class="_BR">
      <button class="hwAss_add" @click="modalFnc('isRegisterModal')">추가</button>
      <button class="hwAss_clear" @click="modalFnc('isClearModal')">해제</button>
    </div>
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
  <ModalGroupAssignmentRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
  <ModalGroupAssignmentClear v-if="isModal.isClearModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { groupAssignmentStore } from '@/stores/atHomeMgmt/groupAssignmentStore.js';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalGroupAssignmentRegister: defineAsyncComponent(() =>
      import('./modal/ModalGroupAssignmentRegister.vue'),
    ),
    ModalGroupAssignmentClear: defineAsyncComponent(() =>
      import('./modal/ModalGroupAssignmentClear.vue'),
    ),
  },
  setup() {
    const store = groupAssignmentStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isRegisterModal: false,
      isClearModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    // 추후 개발시 체크박스 ag그리드 에 맞게 다시 개발
    const columnDefs = reactive([
      {
        maxWidth: 100,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      },
      { field: 'VDI명', headerName: 'VDI명' },
      { field: '사용자명', headerName: '사용자명' },
    ]);
    onCreated();
    return {
      getList,
      modalFnc,
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

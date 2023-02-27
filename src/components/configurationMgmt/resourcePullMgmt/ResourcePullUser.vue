<template>
  <div class="list_group _6">
    <p class="mgb0">사용자 가상 머신 리소스 풀</p>
    <div class="table_top _search">
      <select class="select_01 select_04">
        <option value="">전체</option>
        <option value="">Virtual Machine</option>
        <option value="">Storage</option>
      </select>
      <input type="secrch" class="textInput300" />
      <button class="grayBtn graySearch">검색</button>
    </div>
    <AppAgGrid
      v-if="page"
      v-model:current-number="filterData.page"
      v-model:page-size="filterData.size"
      :column-defs="columnDefs"
      :row-data="page.userList"
      :total-pages="5"
      :total-elements="page.userList.length"
      :suppressRowClickSelection="true"
      :rowSelection="'multiple'"
      @getData="getList"
    >
    </AppAgGrid>
    <div class="btnzon _BR">
      <button class="resourceD_add" @click="modalFnc('isRegisterModal')">추가</button>
      <button class="resourceD_clear" @click="modalFnc('isClearModal')">해제</button>
    </div>
  </div>
  <ModalResourcePullUserClear v-if="isModal.isClearModal" @close="modalFnc" />
  <ModalResourcePullUserRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { resourcePullStore } from '@/stores/configurationMgmt/resourcePullStore.js';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    //StorageFilter: defineAsyncComponent(() => import('./StorageFilter.vue')),
    ModalResourcePullUserClear: defineAsyncComponent(() =>
      import('./modal/ModalResourcePullUserClear.vue'),
    ),
    ModalResourcePullUserRegister: defineAsyncComponent(() =>
      import('./modal/ModalResourcePullUserRegister .vue'),
    ),
  },
  setup() {
    const store = resourcePullStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isRegisterModal: false,
      isClearModal: false,
    });
    const modalFnc = name => {
      console.log(name);
      isModal.value[name] = !isModal.value[name];
    };
    const updateUseFnc = data => {
      // store.UPDATE_WORKCODE_USE(data);
    };
    // 추후 개발시 체크박스 ag그리드 에 맞게 다시 개발
    const columnDefs = reactive([
      {
        minWidth: 180,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
      },
      { field: '구분', headerName: '구분' },
      { field: 'VDI명', headerName: 'VDI명' },
    ]);
    onCreated();
    return {
      getList,
      modalFnc,
      updateUseFnc,
      isModal,
      page,
      workCodeDetail,
      filterData,
      columnDefs,
    };
  },
});
</script>
<style scoped></style>

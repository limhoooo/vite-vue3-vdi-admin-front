<template>
  <div class="list_group _4">
    <p><span class="redtxt">IT직군용</span> 재택 사용자 그룹입니다.</p>
    <div class="table_top _R">
      <input type="secrch" class="textInput300" v-model="filterData.검색어" />
      <button class="grayBtn graySearch" @click="getList()">검색</button>
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
  <ModalAtHomeUserGroupListClear v-if="isModal.isClearModal" @close="modalFnc" />
  <ModalAtHomeUserGroupListRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import AppAgGrid from '@/components/app/AppAgGrid.vue';
import AppGridBtn from '@/components/app/AppGridBtn.vue';
import AppGridCheckBox from '@/components/app/AppGridCheckBox.vue';
import AppGridRowNum from '@/components/app/AppGridRowNum.vue';
import { atHomeUserGroupMgmtStore } from '@/stores/atHomeMgmt/atHomeUserGroupMgmtStore.js';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalAtHomeUserGroupListClear: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeUserGroupListClear.vue'),
    ),
    ModalAtHomeUserGroupListRegister: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeUserGroupListRegister.vue'),
    ),
  },
  setup() {
    const store = atHomeUserGroupMgmtStore();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const workCodeDetail = ref();
    const isModal = ref({
      isRegisterModal: false,
      isClearModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const updateUseFnc = data => {
      // store.UPDATE_WORKCODE_USE(data);
    };
    // 추후 개발시 체크박스 ag그리드 에 맞게 다시 개발
    const columnDefs = reactive([
      {
        headerName: '선택',
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        maxWidth: 100,
      },
      { field: '사용자아이디', headerName: '사용자아이디' },
      { field: '사용자명', headerName: '사용자명' },
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

<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li class="margin0">
      <div class="listBox">
        <input type="date" class="dateInput width200" v-model="filterData.시작일자" />
        <span class="a2a4be">-</span>
        <input type="date" class="dateInput width200" v-model="filterData.종료일자" />
        <input type="search" class="textInput wih300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="grayBtn backup _del backup_del" @click="modalFnc('isDeleteModal')">
        영구삭제
      </button>
      <button class="blueBtn backup right10 backup_add" @click="modalFnc('isRegisterModal')">
        백업등록
      </button>
    </li>
  </ul>
  <ModalBackupRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
  <ModalBackupDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { backupStore } from '@/stores/configurationMgmt/backupStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalBackupDelete: defineAsyncComponent(() => import('./modal/ModalBackupDelete.vue')),
    ModalBackupRegister: defineAsyncComponent(() => import('./modal/ModalBackupRegister.vue')),
  },
  setup() {
    const store = backupStore();
    const { filterData, getList } = useGrid(store);
    const isModal = ref({
      isRegisterModal: false,
      isDeleteModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const { code, GET_USER_AUTH_TYPES } = useCodeItemsStore();
    GET_USER_AUTH_TYPES();
    return {
      code,
      filterData,
      getList,
      modalFnc,
      isModal,
    };
  },
});
</script>
<style scoped></style>

<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li class="">
      <div class="listBox">
        <select class="select_01 select_04">
          <option value="">전체</option>
        </select>
        <input type="search" class="textInput wih300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="grayBtn backup _del storage_del" @click="modalFnc('isDeleteModal')">
        삭제
      </button>
      <button class="blueBtn backup right10 storage_add" @click="modalFnc('isRegisterModal')">
        등록
      </button>
    </li>
  </ul>
  <ModalIpMgmtRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
  <ModalIpMgmtDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { ipMgmtStore } from '@/stores/configurationMgmt/ipMgmtStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalIpMgmtDelete: defineAsyncComponent(() => import('./modal/ModalIpMgmtDelete.vue')),
    ModalIpMgmtRegister: defineAsyncComponent(() => import('./modal/ModalIpMgmtRegister.vue')),
  },
  setup() {
    const store = ipMgmtStore();
    const { filterData, getList } = useGrid(store);
    const { code, GET_CLOUD_PLATFORM_TYPES } = useCodeItemsStore();
    GET_CLOUD_PLATFORM_TYPES();
    const isModal = ref({
      isRegisterModal: false,
      isDeleteModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
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

<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li class="margin0">
      <div class="listBox">
        <select class="select_01 select160" v-model="filterData.종류">
          <option value="">전체</option>
          <option value="일반이미지">일반이미지</option>
          <option value="공용이미지">공용이미지</option>
        </select>
        <select class="select_01 select160" v-model="filterData.구분">
          <option value="">전체</option>
          <option value="Proxmox">Proxmox</option>
        </select>
        <input type="search" class="textInput wih300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="blueBtn backup right10 img_add" @click="modalFnc('isRegisterModal')">
        마스터 이미지 등록
      </button>
    </li>
  </ul>
  <ModalMasterImageRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { masterImageStore } from '@/stores/configurationMgmt/masterImageStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalMasterImageRegister: defineAsyncComponent(() =>
      import('./modal/ModalMasterImageRegister.vue'),
    ),
  },
  setup() {
    const store = masterImageStore();
    const { filterData, getList } = useGrid(store);
    const isModal = ref({
      isRegisterModal: false,
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

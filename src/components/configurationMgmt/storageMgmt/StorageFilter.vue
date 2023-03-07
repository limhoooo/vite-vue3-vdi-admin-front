<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <p class="listName">Cloud 플랫폼 선택</p>
        <AppSelectField
          class="select_01"
          :select-items="code.cloudPlatformItems"
          v-model:selected-value="filterData.Cloud플랫폼선택"
        >
        </AppSelectField>
      </div>
    </li>
    <li class="">
      <div class="listBox">
        <input type="date" class="dateInput width200" v-model="filterData.시작일자" />
        <span class="a2a4be">-</span>
        <input type="date" class="dateInput width200" v-model="filterData.종료일자" />
        <input type="search" class="textInput wih300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="grayBtn backup _del storage_del" @click="modalFnc('isDeleteModal')">
        스토리지 삭제
      </button>
      <button class="blueBtn backup right10 storage_add" @click="modalFnc('isRegisterModal')">
        스토리지 등록
      </button>
    </li>
  </ul>
  <ModalStorageRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
  <ModalStorageDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { storageStore } from '@/stores/configurationMgmt/storageStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalStorageDelete: defineAsyncComponent(() => import('./modal/ModalStorageDelete.vue')),
    ModalStorageRegister: defineAsyncComponent(() => import('./modal/ModalStorageRegister.vue')),
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),
  },
  setup() {
    const store = storageStore();
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

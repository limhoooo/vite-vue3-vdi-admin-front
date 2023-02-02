<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li class="margin0">
      <div class="listBox">
        <select class="select_01 select160" v-model="filterData.검색조건">
          <option value="">전체</option>
          <option value="업무코드">업무코드</option>
          <option value="코드명">코드명</option>
        </select>
        <AppSelectField
          class="select_01"
          :select-items="code.useYn"
          v-model:selected-value="filterData.사용여부"
          empty-title="전체"
        >
        </AppSelectField>
        <input type="search" class="textInput wih300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <div class="g001xlsx">
        <p class="xlsx">
          <a download="" class="xlsxBtn">엑셀저장</a>
          <button class="fffBtn fffBtn2 addCode3" @click="isModalFnc">코드등록</button>
        </p>
      </div>
    </li>
  </ul>
  <ModalWorkCodeWrite v-if="isModal" @close="isModalFnc" />
</template>
<script>
import {  defineAsyncComponent, defineComponent, ref } from 'vue';
import { workCodeStore } from '@/stores/codeMgmt/workCodeStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalWorkCodeWrite: defineAsyncComponent(() => import('./modal/ModalWorkCodeWrite.vue')),
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),
  },
  setup() {
    const store = workCodeStore();
    const isModal = ref(false);
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const { filterData, getList } = useGrid(store);

    const { code, GET_USE_YN } = useCodeItemsStore();
    GET_USE_YN();
    return {
      getList,
      isModalFnc,
      code,
      filterData,
      isModal,
    };
  },
});
</script>
<style scoped></style>

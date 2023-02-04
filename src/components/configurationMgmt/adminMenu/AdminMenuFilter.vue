<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <select class="select_01 select_04" v-model="filterData.depth">
          <option value="">전체</option>
          <option value="Depth1">Depth 1</option>
          <option value="Depth2">Depth 2</option>
        </select>
        <AppSelectField
          class="select_01"
          :select-items="code.useYn"
          v-model:selected-value="filterData.사용여부"
          empty-title="전체"
        >
        </AppSelectField>
        <input type="secrch" class="textInput300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="blueBtn writBtn menuaddBtn" @click="isModalFnc">메뉴등록</button>
    </li>
  </ul>
  <ModalMenuRegister v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { adminMenuStore } from '@/stores/configurationMgmt/adminMenuStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalMenuRegister: defineAsyncComponent(() => import('./modal/ModalMenuRegister.vue')),
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),
  },
  setup() {
    const store = adminMenuStore();
    const { filterData, getList } = useGrid(store);

    const isModal = ref(false);
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
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

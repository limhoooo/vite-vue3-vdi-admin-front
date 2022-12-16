<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <input type="secrch" class="textInput300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
      <button class="blueBtn writBtn" @click="modalFnc('isWriteModal')">글쓰기</button>
    </li>
  </ul>
  <ModalWriteModify v-if="isModal.isWriteModal" @close="modalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { faqStore } from '@/stores/boardMgmt/faqStore.js';
import { useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalWriteModify: defineAsyncComponent(() => import('./modal/ModalWriteModify.vue')),
  },
  setup() {
    const store = faqStore();
    const router = useRouter();
    const { filterData, getList } = useGrid(store);
    const isModal = ref({
      isWriteModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    return {
      filterData,
      getList,
      isModal,
      modalFnc,
    };
  },
});
</script>
<style scoped></style>

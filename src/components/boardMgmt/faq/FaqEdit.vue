<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02">
      <tr>
        <th>NAME</th>
        <td><input type="text" class="textInput textInput3" v-model="detail.title" /></td>
      </tr>
      <tr>
        <th colspan="2">
          <p class="context">CONTEXT</p>
        </th>
      </tr>
    </table>
    <textarea class="noticeBoard faqBoard" v-model="detail.context"></textarea>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
      <button type="" class="blueBtn noticeBtn" @click="writeModify">등록</button>
    </div>
  </div>
  <ModalFaqSuccess v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { faqStore } from '@/stores/boardMgmt/faqStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalFaqSuccess: defineAsyncComponent(() => import('./modal/ModalFaqSuccess.vue')),
  },
  setup() {
    const store = faqStore();
    const router = useRouter();
    const route = useRoute();
    const isModal = ref(false);
    const { getDetail, detail } = useGrid(store);

    const moveList = () => router.push({ name: 'Faq' });
    const writeModify = () => {
      store.MODIFY_FAQ(route.params.id);
      isModalFnc();
    };
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };

    const onCreated = async () => {
      await getDetail(route.params.id);
    };
    onCreated();
    return {
      detail,
      moveList,
      writeModify,
      isModal,
      isModalFnc,
    };
  },
});
</script>
<style scoped></style>

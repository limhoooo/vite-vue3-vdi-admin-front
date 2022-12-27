<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02">
      <tr>
        <th>NAME</th>
        <td><input type="text" class="textInput textInput3" v-model="writeData.title" /></td>
      </tr>
      <tr>
        <th colspan="2">
          <p class="context">CONTEXT</p>
        </th>
      </tr>
    </table>
    <textarea class="noticeBoard faqBoard" v-model="writeData.context"></textarea>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
      <button type="" class="blueBtn noticeBtn" @click="writeSubmit">등록</button>
    </div>
  </div>
  <ModalFaqSuccess v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { faqStore } from '@/stores/boardMgmt/faqStore.js';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalFaqSuccess: defineAsyncComponent(() => import('./modal/ModalFaqSuccess.vue')),
  },
  setup() {
    const store = faqStore();
    const router = useRouter();
    const isModal = ref(false);
    const writeData = ref({
      title: '',
      context: '',
    });
    const moveList = () => router.push({ name: 'Faq' });
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const writeSubmit = () => {
      store.POST_FAQ(writeData.value);
      isModalFnc();
    };

    return {
      writeSubmit,
      moveList,
      writeData,
      isModal,
      isModalFnc,
    };
  },
});
</script>
<style scoped></style>

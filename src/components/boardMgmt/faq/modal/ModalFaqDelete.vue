<template>
  <Modal>
    <template #modal-body>
      <p class="title">정말 답변을 삭제하시겠습니까?</p>
      <div class="contnet"></div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="deleteFnc">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isDeleteModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { faqStore } from '@/stores/boardMgmt/faqStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    id: Number,
  },
  setup(props, { emit }) {
    const store = faqStore();
    const deleteFnc = () => {
      store.DELETE_FAQ(props.id);
      emit('close');
    };
    return {
      deleteFnc,
    };
  },
});
</script>

<style></style>

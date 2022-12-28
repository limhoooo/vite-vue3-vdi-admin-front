<template>
  <Modal>
    <template #modal-body>
      <p class="title">정말로 글을 삭제하시겠습니까?</p>
      <div class="contnet"></div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="deleteFnc">확인</button>
        <button type="" class="grayBtn" @click="$emit('close')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    id: Number,
  },
  setup(props, { emit }) {
    const store = noticeStore();
    const deleteFnc = () => {
      store.DELETE_NOTICE(props.id);
      emit('close');
    };
    return {
      deleteFnc,
    };
  },
});
</script>

<style></style>

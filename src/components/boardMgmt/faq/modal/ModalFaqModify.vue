<template>
  <Modal :width="'900px'">
    <template #modal-body>
      <p class="title">
        자주 묻는 질문(FAQ) 수정
        <span class="subtitle">FAQ을 수정할 수 있는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>TITLE</th>
            <td><input type="text" class="textInput4 textInput3" /></td>
          </tr>
          <tr>
            <th colspan="2">
              <p class="context">CONTEXT</p>
            </th>
          </tr>
        </table>
        <textarea class="noticeBoard faqBoard"></textarea>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="grayBtn" @click="$emit('close', 'isModifyModal')">취소</button>
        <button type="" class="blueBtn">수정</button>
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

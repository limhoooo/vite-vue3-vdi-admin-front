<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">정말로 해당 IP을 삭제하시겠습니까?</p>
      <p class="subTxt">
        ※ VDI 에서 IP를 삭제한다면 사용자가 VDI를 더 이상 사용하지<br />못할 수 있습니다.
      </p>
      <p class="redTxt"></p>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isDeleteModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { systemCodeStore } from '@/stores/configurationMgmt/systemCodeStore';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {},
  setup(props, { emit }) {
    const store = systemCodeStore();
  },
});
</script>

<style></style>

<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">마스터 이미지 명 : MASTERIMAGE004</p>
      <p class="subTxt">정말로 마스터이미지를 삭제하시겠습니까?</p>
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
  props: {
    insertData: Object,
  },
  setup(props, { emit }) {
    const store = systemCodeStore();
  },
});
</script>

<style></style>

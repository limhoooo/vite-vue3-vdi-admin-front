<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">리소스 풀 명 : guestVM_pool</p>
      <p class="subTxt">해당 리소스 풀을 목록에서 삭제하시겠습니까?</p>
      <p class="subTxt">※ 삭제 시 리소스 풀에 추가 된 모든 VDI 및 Storage 들은 해제 됩니다.</p>
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

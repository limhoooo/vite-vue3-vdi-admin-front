<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">사용자 그룹 명 : VDIUser001</p>
      <p class="subTxt">해당 사용자 그룹을 목록에서 삭제하시겠습니까?</p>
      <p class="redTxt">※ 삭제 시 그룹에 추가된 모든 사용자들은 그룹 해제 됩니다.</p>
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

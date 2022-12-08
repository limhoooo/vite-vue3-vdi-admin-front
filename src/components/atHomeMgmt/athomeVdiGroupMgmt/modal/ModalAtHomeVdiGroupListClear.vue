<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title_s">해당 VDI를 그룹에서 해제하시겠습니까?</p>
      <p class="subTxt">단, 재택 VDI관리 목록에서는 사라지지 않습니다.</p>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isClearModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    insertData: Object,
  },
  setup(props, { emit }) {},
});
</script>

<style></style>

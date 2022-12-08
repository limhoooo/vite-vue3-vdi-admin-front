<template>
  <Modal>
    <template #modal-body>
      <div class="contnet">
        <p class="modalCon_p">
          해당사용자는 VDI할당이 불가능합니다. <br />다시 한번 확인 후 버튼을 눌러주십시오.
        </p>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="$emit('close', 'isNoneModal')">확인</button>
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
  props: {},
  setup(props, { emit }) {},
});
</script>

<style></style>

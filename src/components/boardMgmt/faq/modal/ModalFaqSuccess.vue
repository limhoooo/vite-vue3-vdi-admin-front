<template>
  <Modal>
    <template #modal-body>
      <div class="contnet">
        <p class="title">게시물이 등록되었습니다</p>
        <div class="contnet"></div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="successsFnc">확인</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {},
  setup(props, { emit }) {
    const router = useRouter();
    const successsFnc = () => {
      emit('close');
      router.push({ name: 'Faq' });
    };
    return {
      successsFnc,
    };
  },
});
</script>

<style></style>

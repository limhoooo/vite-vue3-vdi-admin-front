<template>
  <Modal>
    <template #modal-body>
      <p class="title">재택용VDI명: MASTERUSER001</p>
      <div class="contnet">
        <p class="modalCon_p">해당재택용 VDI를 정말로 회수하시겠습니까?</p>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="appSubmit">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isCollectModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { homeMgmtStore } from '@/stores/vdisMgmt/homeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    homeListId: Number,
  },
  setup(props, { emit }) {
    const store = homeMgmtStore();
    const appSubmit = () => {
      store.POST_COLLECT(props.homeListId);
      emit('close', 'isCollectModal');
    };
    return { appSubmit };
  },
});
</script>

<style></style>

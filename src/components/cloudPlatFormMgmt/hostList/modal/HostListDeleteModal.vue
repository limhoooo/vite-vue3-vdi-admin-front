<template>
  <Modal>
    <template #modal-body>
      <p class="title_s">
        Cloud 플랫폼 명 : Proxmox<br />
        클러스터 명 : Proxmox Cluster<br />
        Host 명 : Server001
      </p>
      <p class="subTxt">※ 삭제 시 해당 Host를 더 이상 관리하지 않습니다.</p>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isDelete')">취소</button>
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
  props: {},
  setup(props, { emit }) {},
});
</script>

<style scope></style>

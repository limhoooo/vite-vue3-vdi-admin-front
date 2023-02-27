<template>
  <div class="set_in" style="width: 80px">
    <ul>
      <li class="snapshot_add" @click="modalFnc('isRegisterModal')">생성</li>
      <li class="snapshot_restore" @click="modalFnc('isRestoreModal')">복원</li>
      <li class="snapshot_del" @click="modalFnc('isDeleteModal')">삭제</li>
    </ul>
    <ModalSnpshotDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
    <ModalSnpshotRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
    <ModalSnpshotRestore v-if="isModal.isRestoreModal" @close="modalFnc" />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  components: {
    ModalSnpshotDelete: defineAsyncComponent(() => import('./ModalSnpshotDelete.vue')),
    ModalSnpshotRegister: defineAsyncComponent(() => import('./ModalSnpshotRegister.vue')),
    ModalSnpshotRestore: defineAsyncComponent(() => import('./ModalSnpshotRestore.vue')),
  },
  // 공통 store 만들어야함
  setup(props) {
    const isModal = ref({
      isRestoreModal: false,
      isDeleteModal: false,
      isRegisterModal: false,
    });
    const modalFnc = name => {
      console.log(isModal.value[name]);
      isModal.value[name] = !isModal.value[name];
      console.log(isModal.value[name]);
    };
    return {
      isModal,
      modalFnc,
    };
  },
});
</script>
<style scope>
.exitBtn {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>

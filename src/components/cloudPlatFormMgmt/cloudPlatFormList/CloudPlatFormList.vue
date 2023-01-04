<template>
  <div class="list_group _1">
    <p>Cloud 플랫폼 목록</p>
    <div class="set_btn mgb20px">
      <button type="" class="grayBtn cloud_add" @click="modalFnc('isRegister')">등록</button>
      <button type="" class="grayBtn cloud_edit" @click="modalFnc('isModify')">수정</button>
      <button type="" class="grayBtn cloud_del" @click="modalFnc('isDelete')">삭제</button>
    </div>

    <ul>
      <!-- <li class="set_tooltip active">Proxmox</li>
      <li class="set_tooltip">OpenStack</li>
      <li class="set_tooltip">VMWare</li> -->
      <li
        class="set_tooltip"
        v-for="item in page.cloudList"
        @click="activeFnc(item)"
        :class="{ active: isActive.name === item.name }"
        :key="item"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <CloudRegisterModal v-if="isModal.isRegister" @close="modalFnc" />
  <CloudModifyModal v-if="isModal.isModify" @close="modalFnc" />
  <CloudDeleteModal v-if="isModal.isDelete" @close="modalFnc" class="cloud_delModal" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { CloudPlatFormStore } from '@/stores/cloudPlatForm/CloudPlatFormStore.js';
import { useGrid } from '@/composables/grid';
export default defineComponent({
  components: {
    CloudRegisterModal: defineAsyncComponent(() => import('./modal/CloudRegisterModal.vue')),
    CloudModifyModal: defineAsyncComponent(() => import('./modal/CloudModifyModal.vue')),
    CloudDeleteModal: defineAsyncComponent(() => import('./modal/CloudDeleteModal.vue')),
  },
  setup() {
    const store = CloudPlatFormStore();
    const { page } = useGrid(store);
    const isActive = ref('');
    const isModal = ref({
      isRegister: false,
      isModify: false,
      isDelete: false,
    });
    const activeFnc = data => {
      isActive.value = data;
    };
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    return {
      page,
      isActive,
      isModal,
      activeFnc,
      modalFnc,
    };
  },
});
</script>
<style scoped></style>

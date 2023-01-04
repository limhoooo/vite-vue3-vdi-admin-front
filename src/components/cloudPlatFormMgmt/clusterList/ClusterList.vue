<template>
  <div class="list_group _2">
    <p>클러스터 목록</p>
    <div class="set_btn mgb20px">
      <button type="" class="grayBtn cluster_add" @click="modalFnc('isRegister')">등록</button>
      <button type="" class="grayBtn cluster_edit" @click="modalFnc('isModify')">수정</button>
      <button type="" class="grayBtn cluster_del" @click="modalFnc('isDelete')">삭제</button>
    </div>
    <ul>
      <li
        class="set_tooltip"
        v-for="item in page.clusterList"
        @click="activeFnc(item)"
        :class="{ active: isActive.name === item.name }"
        :key="item"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <ClusterRegisterModal v-if="isModal.isRegister" @close="modalFnc" />
  <ClusterModifyModal v-if="isModal.isModify" @close="modalFnc" />
  <ClusterDeleteModal v-if="isModal.isDelete" @close="modalFnc" class="cloud_delModal" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { CloudPlatFormStore } from '@/stores/cloudPlatForm/CloudPlatFormStore.js';
import { useGrid } from '@/composables/grid';
export default defineComponent({
  components: {
    ClusterRegisterModal: defineAsyncComponent(() => import('./modal/ClusterRegisterModal.vue')),
    ClusterModifyModal: defineAsyncComponent(() => import('./modal/ClusterModifyModal.vue')),
    ClusterDeleteModal: defineAsyncComponent(() => import('./modal/ClusterDeleteModal.vue')),
  },
  setup() {
    const store = CloudPlatFormStore();
    const { page } = useGrid(store);
    const isActive = ref('');
    const activeFnc = data => {
      isActive.value = data;
    };
    const isModal = ref({
      isRegister: false,
      isModify: false,
      isDelete: false,
    });
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

<template>
  <div class="list_group _1">
    <p>재택 VDI 그룹</p>
    <div class="set_btn mgb20px">
      <button type="" class="grayBtn resource_add" @click="modalFnc('isRegisterModal')">
        추가
      </button>
      <button type="" class="grayBtn resource_edit" @click="modalFnc('isModifyModal')">수정</button>
      <button type="" class="grayBtn resource_del" @click="modalFnc('isDeleteModal')">삭제</button>
    </div>
    <ul>
      <li
        v-for="item in page.list"
        :key="item"
        @click="activeFnc(item)"
        :class="{ active: isActive.name === item.name }"
        class="set_tooltip"
      >
        <span v-if="item.use" class="use"> [사용] </span>
        <span v-else class="unused"> [미사용] </span>
        {{ item.name }}
      </li>
    </ul>
  </div>
  <ModalAtHomeVdiGroupDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
  <ModalAtHomeVdiGrouptModify v-if="isModal.isModifyModal" @close="modalFnc" />
  <ModalAtHomeVdiGroupRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { useGrid } from '@/composables/grid';

import { useCodeItemsStore } from '@/stores/codeStore';
import { atHomeVdiGroupMgmtStore } from '@/stores/atHomeMgmt/atHomeVdiGroupMgmtStore.js';

export default defineComponent({
  components: {
    ModalAtHomeVdiGroupDelete: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeVdiGroupDelete.vue'),
    ),
    ModalAtHomeVdiGrouptModify: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeVdiGrouptModify.vue'),
    ),
    ModalAtHomeVdiGroupRegister: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeVdiGroupRegister .vue'),
    ),
  },
  setup() {
    const store = atHomeVdiGroupMgmtStore();
    const { filterData, getList, page, onCreated } = useGrid(store);

    const { code, GET_CLOUD_PLATFORM_TYPES } = useCodeItemsStore();
    GET_CLOUD_PLATFORM_TYPES();
    const isActive = ref('');
    const isModal = ref({
      isDeleteModal: false,
      isModifyModal: false,
      isRegisterModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const activeFnc = data => {
      isActive.value = data;
    };
    onCreated();
    return {
      page,
      filterData,
      getList,
      code,
      activeFnc,
      isActive,
      modalFnc,
      isModal,
    };
  },
});
</script>
<style scoped></style>

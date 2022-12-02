<template>
  <div class="list_group _1">
    <p>재택 사용자 그룹</p>
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
        {{ item.name }}
      </li>
    </ul>
  </div>
  <ModalAtHomeUserGroupDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
  <ModalAtHomeUserGrouptModify v-if="isModal.isModifyModal" @close="modalFnc" />
  <ModalAtHomeUserGroupRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { useGrid } from '@/composables/grid';

import { useCodeItemsStore } from '@/stores/codeStore';
import { atHomeUserGroupMgmtStore } from '@/stores/atHomeMgmt/atHomeUserGroupMgmtStore.js';

export default defineComponent({
  components: {
    ModalAtHomeUserGroupDelete: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeUserGroupDelete.vue'),
    ),
    ModalAtHomeUserGrouptModify: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeUserGrouptModify.vue'),
    ),
    ModalAtHomeUserGroupRegister: defineAsyncComponent(() =>
      import('./modal/ModalAtHomeUserGroupRegister .vue'),
    ),
  },
  setup() {
    const store = atHomeUserGroupMgmtStore();
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

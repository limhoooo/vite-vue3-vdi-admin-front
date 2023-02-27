<template>
  <div class="list_group _5">
    <p>리소스 풀 목록</p>
    <div class="set_btn mgb20px">
      <button type="" class="grayBtn resource_add" @click="modalFnc('isRegisterModal')">
        추가
      </button>
      <button type="" class="grayBtn resource_edit" @click="modalFnc('isModifyModal')">수정</button>
      <button type="" class="grayBtn resource_del" @click="modalFnc('isDeleteModal')">삭제</button>
    </div>

    <p class="listName _s">클라우드 플랫폼 구분</p>
    <AppSelectField
      class="select_01 select_04_s132"
      :select-items="code.cloudPlatformItems"
      v-model:selected-value="filterData.Cloud플랫폼선택"
    >
    </AppSelectField>

    <p class="resource_tit">리소스 풀 명</p>
    <ul>
      <li
        v-for="item in page.list"
        :key="item"
        @click="activeFnc(item)"
        :class="{ active: isActive.name === item.name }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <ModalResourcePullListDelete v-if="isModal.isDeleteModal" @close="modalFnc" />
  <ModalResourcePullListModify v-if="isModal.isModifyModal" @close="modalFnc" />
  <ModalResourcePullListRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { useGrid } from '@/composables/grid';

import { useCodeItemsStore } from '@/stores/codeStore';
import { resourcePullStore } from '@/stores/configurationMgmt/resourcePullStore.js';

export default defineComponent({
  components: {
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),

    ModalResourcePullListDelete: defineAsyncComponent(() =>
      import('./modal/ModalResourcePullListDelete.vue'),
    ),
    ModalResourcePullListModify: defineAsyncComponent(() =>
      import('./modal/ModalResourcePullListModify.vue'),
    ),
    ModalResourcePullListRegister: defineAsyncComponent(() =>
      import('./modal/ModalResourcePullListRegister.vue'),
    ),
  },
  setup() {
    const store = resourcePullStore();
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

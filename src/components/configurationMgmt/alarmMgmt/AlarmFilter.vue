<template>
  <TheContentHeader></TheContentHeader>
  <table class="table_02">
    <tr>
      <th>발신자</th>
      <td>02-0000-0000</td>
    </tr>
    <tr>
      <th>수신자</th>
      <td>
        <button class="UserSelection fffBtn fffBtn2" @click="modalFnc('isRegisterModal')">
          수신자 등록
        </button>
      </td>
    </tr>
  </table>
  <ModalAlarmRegister v-if="isModal.isRegisterModal" @close="modalFnc" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { alarmStore } from '@/stores/configurationMgmt/alarmStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalAlarmRegister: defineAsyncComponent(() => import('./modal/ModalAlarmRegister.vue')),
  },
  setup() {
    const store = alarmStore();
    const { filterData, getList } = useGrid(store);
    const { code, GET_CLOUD_PLATFORM_TYPES } = useCodeItemsStore();
    GET_CLOUD_PLATFORM_TYPES();
    const isModal = ref({
      isRegisterModal: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    return {
      code,
      filterData,
      getList,
      modalFnc,
      isModal,
    };
  },
});
</script>
<style scoped></style>

<template>
  <div class="setDiv">
    <AdminMenuDepthComponent :list="menuOneDepthList" :name="'Depth1'" @getTwoDepth="getTwoDepth" />
    <AdminMenuDepthComponent :list="menuTwoDepthList" :name="'Depth2'" :parentDept="parentDept" />
  </div>
  <div class="btnBox btnBox2">
    <button type="" class="blueBtn sendBtn" @click="insertMenu">등록</button>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { adminMenuStore } from '@/stores/configurationMgmt/adminMenuStore.js';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    AdminMenuDepthComponent: defineAsyncComponent(() => import('./AdminMenuDepthComponent.vue')),
  },
  setup() {
    const store = adminMenuStore();
    const { onCreated } = useGrid(store);

    const menuOneDepthList = computed(() => store.ADMIN_MENU_LIST);
    const menuTwoDepthList = computed(() => store.ADMIN_DETAIL_MENU_LIST);
    const parentDept = ref();
    const getTwoDepth = data => {
      store.GET_PAGE_DETAIL(data);
      parentDept.value = data;
    };
    const insertMenu = () => {
      store.POST_ADMIN_MENU();
    };
    onCreated();
    return { menuOneDepthList, menuTwoDepthList, getTwoDepth, parentDept, insertMenu };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
.tableGraph th {
  text-align: center;
}
.tableGraph td {
  text-align: center;
}
</style>

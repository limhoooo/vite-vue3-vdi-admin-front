<template>
  <div class="content">
    <TheContentHeader />
    <div class="group_top ta_r mgt30px">
      <a href="#" class="re">새로고침</a>
    </div>
    <CloudPlatFormList />
    <ClusterList />
    <HostList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { CloudPlatFormStore } from '@/stores/cloudPlatForm/CloudPlatFormStore.js';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    CloudPlatFormList: defineAsyncComponent(() =>
      import('./cloudPlatFormList/CloudPlatFormList.vue'),
    ),
    ClusterList: defineAsyncComponent(() => import('./clusterList/ClusterList.vue')),
    HostList: defineAsyncComponent(() => import('./hostList/HostList.vue')),
  },
  setup() {
    const store = CloudPlatFormStore();
    const { onCreated } = useGrid(store);
    onCreated();
  },
});
</script>

<style scoped></style>

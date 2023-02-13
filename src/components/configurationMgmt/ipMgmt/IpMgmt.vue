<template>
  <div class="content">
    <IpMgmtFilter />
    <IpMgmtList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    IpMgmtFilter: defineAsyncComponent(() => import('./IpMgmtFilter.vue')),
    IpMgmtList: defineAsyncComponent(() => import('./IpMgmtList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>

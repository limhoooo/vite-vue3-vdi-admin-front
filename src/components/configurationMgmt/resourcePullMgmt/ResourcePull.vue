<template>
  <div class="content">
    <TheContentHeader />
    <div class="mgb40px"></div>
    <ResourcePullList />
    <ResourcePullUser />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ResourcePullList: defineAsyncComponent(() => import('./ResourcePullList.vue')),
    ResourcePullUser: defineAsyncComponent(() => import('./ResourcePullUser.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>

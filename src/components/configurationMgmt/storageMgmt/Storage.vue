<template>
  <div class="content">
    <StorageFilter />
    <StorageList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    StorageFilter: defineAsyncComponent(() => import('./StorageFilter.vue')),
    StorageList: defineAsyncComponent(() => import('./StorageList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>

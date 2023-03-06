<template>
  <div class="content">
    <SnapshotFilter />
    <SnapshotList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';
export default defineComponent({
  components: {
    SnapshotFilter: defineAsyncComponent(() => import('./SnapshotFilter.vue')),
    SnapshotList: defineAsyncComponent(() => import('./SnapshotList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>

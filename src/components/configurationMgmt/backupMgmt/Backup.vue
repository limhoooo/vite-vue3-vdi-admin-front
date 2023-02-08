<template>
  <div class="content">
    <BackupFilter />
    <BackupList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    BackupFilter: defineAsyncComponent(() => import('./BackupFilter.vue')),
    BackupList: defineAsyncComponent(() => import('./BackupList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>

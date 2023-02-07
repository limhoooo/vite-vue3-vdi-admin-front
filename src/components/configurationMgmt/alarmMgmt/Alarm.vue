<template>
  <div class="content">
    <AlarmFilter />
    <AlarmList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    AlarmFilter: defineAsyncComponent(() => import('./AlarmFilter.vue')),
    AlarmList: defineAsyncComponent(() => import('./AlarmList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>

<template>
  <div class="content mainTaps">
    <WorkCodeFilter />
    <WorkCodeList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    WorkCodeFilter: defineAsyncComponent(() => import('./WorkCodeFilter.vue')),
    WorkCodeList: defineAsyncComponent(() => import('./WorkCodeList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>

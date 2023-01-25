<template>
  <div class="content mainTaps">
    <SystemCodeBigFilter />
    <SystemCodeBigList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    SystemCodeBigFilter: defineAsyncComponent(() => import('./SystemCodeBigFilter.vue')),
    SystemCodeBigList: defineAsyncComponent(() => import('./SystemCodeBigList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>

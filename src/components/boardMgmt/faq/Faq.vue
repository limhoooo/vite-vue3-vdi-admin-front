<template>
  <div class="content">
    <FaqFilter />
    <FaqList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    FaqFilter: defineAsyncComponent(() => import('./FaqFilter.vue')),
    FaqList: defineAsyncComponent(() => import('./FaqList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
